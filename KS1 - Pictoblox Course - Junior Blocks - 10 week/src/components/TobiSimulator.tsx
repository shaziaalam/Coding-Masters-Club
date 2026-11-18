import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Sparkles, Clock, Hand } from 'lucide-react';
import confetti from 'canvas-confetti';
import { jrSounds } from '../utils/soundEffects';
import { JrStep, JrBlock } from '../types';

interface TobiSimulatorProps {
  step?: JrStep;
  weekNumber?: number;
  stepIndex?: number;
  actionType?: string;
  value?: number;
  speechText?: string;
}

export const TobiSimulator: React.FC<TobiSimulatorProps> = ({
  step,
  weekNumber = 1,
  stepIndex = 0,
}) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [speech, setSpeech] = useState<string | null>(null);
  const [rabbitSpeech, setRabbitSpeech] = useState<string | null>(null);
  const [rabbitPosY, setRabbitPosY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBlockIndex, setCurrentBlockIndex] = useState<number | null>(null);
  const [isWaitingTimer, setIsWaitingTimer] = useState<number | null>(null);
  const [bumpEffect, setBumpEffect] = useState(false);
  const [showTapHand, setShowTapHand] = useState(false);
  const [lapCount, setLapCount] = useState(0);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Ready to run');

  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimers = () => {
    timerRef.current.forEach((t) => clearTimeout(t));
    timerRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  const resetInitialState = () => {
    clearAllTimers();
    setIsPlaying(false);
    setCurrentBlockIndex(null);
    setIsWaitingTimer(null);
    setSpeech(null);
    setRabbitSpeech(null);
    setBumpEffect(false);
    setShowTapHand(false);
    setLapCount(0);
    setIsCinemaMode(false);
    setRotation(0);
    setScale(1);
    setOpacity(1);

    // Initial positioning based on lesson scenario
    if (weekNumber === 3) {
      setPosX(-90); // Left riverbank
      setPosY(0);
    } else if (weekNumber === 4) {
      setPosX(-30);
      setPosY(0); // Ground under tree
    } else if (weekNumber === 8) {
      setPosX(-75); // Left side of meadow
      setPosY(0);
      setRabbitPosY(0);
    } else if (weekNumber === 9) {
      setPosX(-95); // Start line of racetrack
      setPosY(0);
    } else {
      setPosX(0);
      setPosY(0);
    }

    setStatusMessage('Ready to run');
  };

  // Reset when step or week changes
  useEffect(() => {
    resetInitialState();
  }, [step?.id, weekNumber]);

  const schedule = (fn: () => void, delayMs: number) => {
    const t = setTimeout(fn, delayMs);
    timerRef.current.push(t);
  };

  const handleReset = () => {
    jrSounds.playPop();
    resetInitialState();
  };

  // ==========================================
  // SCRIPTED ANIMATION RUNNER PER WEEK & STEP
  // ==========================================
  const runSimulation = () => {
    if (isPlaying) return;
    clearAllTimers();
    setIsPlaying(true);
    setStatusMessage('Running code...');

    const stepId = step?.id || (stepIndex + 1);

    // ----------------------------------------
    // WEEK 1: WAKE UP TOBI
    // ----------------------------------------
    if (weekNumber === 1) {
      if (stepId === 1) {
        // Step 1: Tobi in the sunshine - waves and wakes up
        jrSounds.playPop();
        setStatusMessage('Tobi waves in the sunny park! ☀️');
        setRotation(8);
        setScale(1.1);
        schedule(() => {
          setRotation(-8);
        }, 200);
        schedule(() => {
          setRotation(0);
          setScale(1);
          setSpeech('Hello sunshine! ☀️');
        }, 400);
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Done! Tobi is ready.');
        }, 2200);
      } else if (stepId === 2) {
        // Step 2: Snap Green Flag
        jrSounds.playStepComplete();
        setStatusMessage('Green Flag clicked! 🏁');
        setPosY(-30);
        schedule(() => {
          setPosY(0);
          setSpeech('Green Flag ready!');
        }, 250);
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Done!');
        }, 1800);
      } else if (stepId === 3 || stepId === 4) {
        // Step 3 & 4: Flag -> Say "Hello!" (-> End)
        setCurrentBlockIndex(0);
        jrSounds.playPop();
        setStatusMessage('Start on Flag 🏁');

        schedule(() => {
          setCurrentBlockIndex(1);
          jrSounds.playStepComplete();
          setSpeech('Hello!');
          setStatusMessage('Tobi says Hello! 💬');
        }, 400);

        if (stepId === 4) {
          schedule(() => {
            setCurrentBlockIndex(2);
            jrSounds.playSuccess();
            setStatusMessage('End block reached! ⭐');
          }, 1800);
          schedule(() => {
            setSpeech(null);
            setCurrentBlockIndex(null);
            setIsPlaying(false);
            setStatusMessage('Done!');
          }, 2600);
        } else {
          schedule(() => {
            setSpeech(null);
            setCurrentBlockIndex(null);
            setIsPlaying(false);
            setStatusMessage('Done!');
          }, 2200);
        }
      }
    }

    // ----------------------------------------
    // WEEK 2: TAP & POP!
    // ----------------------------------------
    else if (weekNumber === 2) {
      if (stepId === 1) {
        // Step 1: Tap block
        setShowTapHand(true);
        setStatusMessage('Finger taps Tobi! 👆');
        schedule(() => {
          jrSounds.playPop();
          setPosY(-20);
          setScale(1.15);
        }, 300);
        schedule(() => {
          setPosY(0);
          setScale(1);
          setShowTapHand(false);
          setIsPlaying(false);
          setStatusMessage('Tap detected! ⭐');
        }, 700);
      } else if (stepId === 2) {
        // Step 2: Tap -> Pop sound
        setShowTapHand(true);
        schedule(() => {
          jrSounds.playPop();
          setSpeech('POP! 🫧');
          setPosY(-25);
          setShowTapHand(false);
        }, 300);
        schedule(() => {
          setPosY(0);
        }, 550);
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Bubble Pop! 🫧');
        }, 1600);
      } else if (stepId === 3 || stepId === 4) {
        // Step 3 & 4: Tap -> Pop -> Grow 2 (-> End)
        setShowTapHand(true);
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          jrSounds.playPop();
          setSpeech('POP! 🫧');
          setShowTapHand(false);
        }, 350);

        schedule(() => {
          setCurrentBlockIndex(2);
          jrSounds.playStepComplete();
          setScale(1.45);
          setSpeech('Big Giant Tobi! 🎈');
          setStatusMessage('Tobi grew 2 sizes bigger! 🐻');
        }, 800);

        if (stepId === 4) {
          schedule(() => {
            setCurrentBlockIndex(3);
            jrSounds.playSuccess();
          }, 2200);
          schedule(() => {
            setSpeech(null);
            setCurrentBlockIndex(null);
            setIsPlaying(false);
            setStatusMessage('Done! Tap again or Reset.');
          }, 2800);
        } else {
          schedule(() => {
            setSpeech(null);
            setCurrentBlockIndex(null);
            setIsPlaying(false);
            setStatusMessage('Done! Big Tobi!');
          }, 2400);
        }
      }
    }

    // ----------------------------------------
    // WEEK 3: TOBI'S STEPPING STONES (RIVER CROSSING)
    // ----------------------------------------
    else if (weekNumber === 3) {
      if (stepId === 1) {
        // Step 1: On the Riverbank
        setPosX(-90);
        jrSounds.playPop();
        setSpeech('Ready to cross! 🌊');
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Tobi ready on left riverbank.');
        }, 1500);
      } else if (stepId === 2) {
        // Step 2: Walk 3 steps right to river edge
        setPosX(-90);
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('Taking 3 steps forward...');
          // Walk step 1
          setPosX(-70);
          jrSounds.playPop();
        }, 300);
        schedule(() => {
          setPosX(-50);
          jrSounds.playPop();
        }, 600);
        schedule(() => {
          setPosX(-25);
          jrSounds.playPop();
          setSpeech('At water edge!');
        }, 900);
        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Reached river edge!');
        }, 2000);
      } else if (stepId === 3) {
        // Step 3: Walk + Hop over the water
        setPosX(-25);
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          jrSounds.playBoing();
          setStatusMessage('Hopping over the river! 🌊');
          setPosY(-45);
          setPosX(25);
        }, 300);
        schedule(() => {
          setPosY(0);
          jrSounds.playPop();
          setSpeech('Safe on stepping stone! 🪨');
        }, 700);
        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Landed on stone!');
        }, 2000);
      } else if (stepId === 4) {
        // Step 4: Full cross sequence (Walk 3 -> Hop 2 -> Walk 2 -> End)
        setPosX(-90);
        setPosY(0);
        setCurrentBlockIndex(0);

        // Walk 3
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('1. Marching to water...');
          setPosX(-30);
          jrSounds.playPop();
        }, 350);

        // Hop 2 over river
        schedule(() => {
          setCurrentBlockIndex(2);
          setStatusMessage('2. Leaping across water! 🌊');
          jrSounds.playBoing();
          setPosY(-50);
          setPosX(25);
        }, 850);
        schedule(() => {
          setPosY(0);
          jrSounds.playPop();
        }, 1250);

        // Walk 2 onto green bank
        schedule(() => {
          setCurrentBlockIndex(3);
          setStatusMessage('3. Walking onto other side!');
          setPosX(80);
          jrSounds.playPop();
        }, 1500);

        // End
        schedule(() => {
          setCurrentBlockIndex(4);
          jrSounds.playSuccess();
          setSpeech('Crossed safely! 🌊🎉');
        }, 1900);

        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Done! Successfully crossed river.');
        }, 3200);
      }
    }

    // ----------------------------------------
    // WEEK 4: UP, UP AND DOWN! (HONEY TREE)
    // ----------------------------------------
    else if (weekNumber === 4) {
      if (stepId === 1) {
        setPosX(-30);
        setPosY(0);
        jrSounds.playPop();
        setSpeech('Look at the tall tree! 🌳');
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Ready at tree trunk.');
        }, 1600);
      } else if (stepId === 2) {
        // Step 2: Climb Up 4
        setPosX(-30);
        setPosY(0);
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('Climbing up tree branches...');
          jrSounds.playPop();
          setPosY(-55);
        }, 350);
        schedule(() => {
          jrSounds.playStepComplete();
          setSpeech('In the leaves! 🍃');
        }, 850);
        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Climbed to branches!');
        }, 2200);
      } else if (stepId === 3) {
        // Step 3: Climb Up 4 -> Wait 2 -> Say "Yummy Honey!"
        setPosX(-30);
        setPosY(0);
        setCurrentBlockIndex(0);

        schedule(() => {
          setCurrentBlockIndex(0);
          jrSounds.playPop();
          setPosY(-55);
          setStatusMessage('Climbing up...');
        }, 300);

        // Wait 2 seconds
        schedule(() => {
          setCurrentBlockIndex(1);
          setIsWaitingTimer(2);
          jrSounds.playHint();
          setStatusMessage('Waiting 2 seconds to eat... ⏱️');
        }, 800);

        schedule(() => {
          setIsWaitingTimer(1);
          jrSounds.playHint();
        }, 1600);

        // Say Yummy Honey!
        schedule(() => {
          setIsWaitingTimer(null);
          setCurrentBlockIndex(2);
          jrSounds.playStepComplete();
          setSpeech('Yummy Honey! 🍯');
          setStatusMessage('Delicious honey!');
        }, 2300);

        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Done eating!');
        }, 3800);
      } else if (stepId === 4) {
        // Step 4: Full tree routine (Up -> Wait -> Say -> Down -> End)
        setPosX(-30);
        setPosY(0);
        setCurrentBlockIndex(0);

        // Up
        schedule(() => {
          setCurrentBlockIndex(1);
          jrSounds.playPop();
          setPosY(-55);
          setStatusMessage('1. Climbing up tree...');
        }, 350);

        // Wait
        schedule(() => {
          setCurrentBlockIndex(2);
          setIsWaitingTimer(2);
          setStatusMessage('2. Eating honey... ⏱️');
          setSpeech('Yummy Honey! 🍯');
        }, 850);

        // Down
        schedule(() => {
          setIsWaitingTimer(null);
          setSpeech(null);
          setCurrentBlockIndex(3);
          setStatusMessage('3. Climbing safely back down!');
          jrSounds.playPop();
          setPosY(0);
        }, 2200);

        // End
        schedule(() => {
          setCurrentBlockIndex(4);
          jrSounds.playSuccess();
          setSpeech('Safe on ground! 🌳');
        }, 2700);

        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Done! Tree climb complete.');
        }, 4000);
      }
    }

    // ----------------------------------------
    // WEEK 5: KANGAROO HOPS & TWIRLS (GYMNASTICS)
    // ----------------------------------------
    else if (weekNumber === 5) {
      if (stepId === 1) {
        jrSounds.playPop();
        setSpeech('Gymnastics time! 🤸');
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Ready on gym mat.');
        }, 1500);
      } else if (stepId === 2) {
        // Step 2: 2 Kangaroo Hops
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('Hop 1! 🦘');
          jrSounds.playBoing();
          setPosY(-38);
        }, 300);
        schedule(() => {
          setPosY(0);
        }, 600);
        schedule(() => {
          setStatusMessage('Hop 2! 🦘');
          jrSounds.playBoing();
          setPosY(-48);
        }, 850);
        schedule(() => {
          setPosY(0);
          jrSounds.playStepComplete();
          setSpeech('Great hops!');
        }, 1200);
        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Done 2 hops!');
        }, 2300);
      } else if (stepId === 3) {
        // Step 3: Hop -> Ballerina 360 Spin
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(0);
          jrSounds.playBoing();
          setPosY(-40);
        }, 300);
        schedule(() => {
          setPosY(0);
        }, 600);
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('360° Ballerina Twirl! 🩰');
          jrSounds.playWhoosh();
          setRotation(360);
        }, 850);
        schedule(() => {
          jrSounds.playStepComplete();
          setSpeech('Full spin! ✨');
        }, 1350);
        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Done hop & spin!');
        }, 2500);
      } else if (stepId === 4) {
        // Step 4: Grand Finish Routine (Hop -> Spin -> Walk -> Ta-da! -> End)
        setCurrentBlockIndex(0);
        setPosX(-40);

        // 1. Hop
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('1. Kangaroo Hop! 🦘');
          jrSounds.playBoing();
          setPosY(-45);
        }, 300);
        schedule(() => {
          setPosY(0);
        }, 650);

        // 2. Spin
        schedule(() => {
          setCurrentBlockIndex(2);
          setStatusMessage('2. Ballerina Twirl! 🩰');
          jrSounds.playWhoosh();
          setRotation(360);
        }, 850);

        // 3. Move forward
        schedule(() => {
          setPosX(10);
        }, 1300);

        // 4. Ta-da bow!
        schedule(() => {
          setCurrentBlockIndex(3);
          jrSounds.playSuccess();
          setScale(1.15);
          setSpeech('Ta-da! 🎉');
          setStatusMessage('Take a bow! 👏');
        }, 1550);

        // 5. End
        schedule(() => {
          setCurrentBlockIndex(4);
        }, 2400);

        schedule(() => {
          setScale(1);
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Gymnastics show complete! ⭐');
        }, 3400);
      }
    }

    // ----------------------------------------
    // WEEK 6: PEEK-A-BOO DISGUISES (MAGIC STAGE)
    // ----------------------------------------
    else if (weekNumber === 6) {
      if (stepId === 1) {
        setShowTapHand(true);
        setStatusMessage('Magic stage ready! Tap Tobi.');
        schedule(() => {
          setShowTapHand(false);
          setIsPlaying(false);
        }, 1500);
      } else if (stepId === 2) {
        // Step 2: Tap -> Hide
        setShowTapHand(true);
        schedule(() => {
          setShowTapHand(false);
          jrSounds.playWhoosh();
          setOpacity(0);
          setStatusMessage('Tobi vanished into thin air! 🪄');
          setSpeech('Where did I go?!');
        }, 400);
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Invisible! Click Reset to show.');
        }, 2000);
      } else if (stepId === 3) {
        // Step 3: Tap -> Hide -> Wait 2 seconds
        setShowTapHand(true);
        schedule(() => {
          setShowTapHand(false);
          jrSounds.playWhoosh();
          setOpacity(0);
          setIsWaitingTimer(2);
          setStatusMessage('Hidden! Counting 2 seconds... ⏱️');
        }, 400);
        schedule(() => {
          setIsWaitingTimer(1);
          jrSounds.playHint();
        }, 1200);
        schedule(() => {
          setIsWaitingTimer(null);
          setIsPlaying(false);
          setStatusMessage('2 seconds suspense over!');
        }, 2000);
      } else if (stepId === 4) {
        // Step 4: Tap -> Hide -> Wait -> Show -> Pop -> Say "Peek-a-Boo!" -> End
        setShowTapHand(true);
        setCurrentBlockIndex(0);

        // Hide
        schedule(() => {
          setCurrentBlockIndex(1);
          setShowTapHand(false);
          jrSounds.playWhoosh();
          setOpacity(0);
          setStatusMessage('1. Vanished into shadows! 🪄');
        }, 350);

        // Wait
        schedule(() => {
          setCurrentBlockIndex(2);
          setIsWaitingTimer(2);
          setStatusMessage('2. Waiting in suspense... ⏱️');
        }, 750);
        schedule(() => {
          setIsWaitingTimer(1);
          jrSounds.playHint();
        }, 1500);

        // Show & Pop & Say
        schedule(() => {
          setIsWaitingTimer(null);
          setCurrentBlockIndex(3);
          setOpacity(1);
          setScale(1.25);
          setPosY(-30);
          jrSounds.playPop();
          jrSounds.playSuccess();
          setSpeech('PEEK-A-BOO! 👻✨');
          setStatusMessage('3. Reappeared with Peek-a-Boo!');
        }, 2100);

        schedule(() => {
          setPosY(0);
          setScale(1);
          setCurrentBlockIndex(6);
        }, 2700);

        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Magic trick complete! 🪄');
        }, 3800);
      }
    }

    // ----------------------------------------
    // WEEK 7: THE MAGIC REPEAT LOOP (DISCO DANCE)
    // ----------------------------------------
    else if (weekNumber === 7) {
      if (stepId === 1) {
        jrSounds.playPop();
        setSpeech('Dance party leader! 🪩');
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Green flag ready.');
        }, 1500);
      } else if (stepId === 2) {
        // Step 2: Repeat bracket
        jrSounds.playStepComplete();
        setStatusMessage('Repeat Loop: 4 times!');
        setScale(1.15);
        schedule(() => {
          setScale(1);
          setSpeech('4 dance cycles ready! 🔄');
        }, 300);
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Repeat block set to 4.');
        }, 1800);
      } else if (stepId === 3 || stepId === 4) {
        // Step 3 & 4: Repeat 4 [ Move Right 1 + Hop 1 ]
        setPosX(-80);
        setCurrentBlockIndex(0);

        // Cycle 1
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('Dance 1/4: Step & Hop! 🎵');
          setPosX(-50);
          jrSounds.playBoing();
          setPosY(-35);
        }, 300);
        schedule(() => setPosY(0), 600);

        // Cycle 2
        schedule(() => {
          setStatusMessage('Dance 2/4: Step & Hop! 🎵');
          setPosX(-20);
          jrSounds.playBoing();
          setPosY(-35);
        }, 850);
        schedule(() => setPosY(0), 1150);

        // Cycle 3
        schedule(() => {
          setStatusMessage('Dance 3/4: Step & Hop! 🎵');
          setPosX(10);
          jrSounds.playBoing();
          setPosY(-35);
        }, 1400);
        schedule(() => setPosY(0), 1700);

        // Cycle 4
        schedule(() => {
          setStatusMessage('Dance 4/4: Step & Hop! 🎵');
          setPosX(45);
          jrSounds.playBoing();
          setPosY(-40);
        }, 1950);
        schedule(() => {
          setPosY(0);
          jrSounds.playSuccess();
          setSpeech('Rhythm Master! 🪩');
        }, 2300);

        if (stepId === 4) {
          schedule(() => {
            setCurrentBlockIndex(3);
          }, 2400);
        }

        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Completed all 4 repeat dance cycles!');
        }, 3600);
      }
    }

    // ----------------------------------------
    // WEEK 8: FRIENDLY ANIMAL BUMP (MEADOW)
    // ----------------------------------------
    else if (weekNumber === 8) {
      if (stepId === 1) {
        setPosX(-75);
        setRabbitPosY(0);
        jrSounds.playPop();
        setStatusMessage('Tobi meets Rabbit in the meadow! 🌸');
        schedule(() => setIsPlaying(false), 1500);
      } else if (stepId === 2) {
        // Step 2: Tobi walks towards Rabbit
        setPosX(-75);
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('Tobi walks across to Rabbit...');
          setPosX(15);
          jrSounds.playPop();
        }, 350);
        schedule(() => {
          setBumpEffect(true);
          jrSounds.playStepComplete();
          setSpeech('Hello Rabbit!');
        }, 950);
        schedule(() => {
          setBumpEffect(false);
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Tobi reached Rabbit!');
        }, 2400);
      } else if (stepId === 3) {
        // Step 3: Bump block trigger
        setPosX(15);
        setBumpEffect(true);
        jrSounds.playStepComplete();
        setStatusMessage('Characters bump! Bump trigger fires ⭐');
        schedule(() => {
          setBumpEffect(false);
          setIsPlaying(false);
          setStatusMessage('Bump trigger ready!');
        }, 1600);
      } else if (stepId === 4) {
        // Step 4: Tobi bumps Rabbit -> Rabbit hops and says Hello!
        setPosX(-75);
        setRabbitPosY(0);
        setCurrentBlockIndex(0);

        // Tobi walks
        schedule(() => {
          setCurrentBlockIndex(0);
          setStatusMessage('1. Tobi walks over...');
          setPosX(15);
          jrSounds.playPop();
        }, 300);

        // Bump
        schedule(() => {
          setBumpEffect(true);
          jrSounds.playPop();
          setStatusMessage('2. Gentle bump! ⭐');
        }, 850);

        // Rabbit reacts: Hop 2
        schedule(() => {
          setBumpEffect(false);
          setCurrentBlockIndex(1);
          setStatusMessage('3. Rabbit hops with joy! 🐰');
          jrSounds.playBoing();
          setRabbitPosY(-45);
        }, 1150);
        schedule(() => {
          setRabbitPosY(0);
        }, 1500);

        // Rabbit says Hello Tobi!
        schedule(() => {
          setCurrentBlockIndex(2);
          jrSounds.playSuccess();
          setRabbitSpeech('Hello Tobi! 🐰👋');
          setSpeech('Hello friend! 🐻');
        }, 1750);

        schedule(() => {
          setSpeech(null);
          setRabbitSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Friends happily united!');
        }, 3600);
      }
    }

    // ----------------------------------------
    // WEEK 9: FAST OR SLOW? (RACETRACK)
    // ----------------------------------------
    else if (weekNumber === 9) {
      if (stepId === 1) {
        setPosX(-95);
        jrSounds.playPop();
        setSpeech('Ready at start line! 🏁');
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('At start line.');
        }, 1500);
      } else if (stepId === 2) {
        // Step 2: Speed block set to Fast Rabbit
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          jrSounds.playStepComplete();
          setStatusMessage('Speed set to Fast Rabbit! 🐇💨');
          setSpeech('Zoom Mode! ⚡');
        }, 300);
        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Turbo speed activated!');
        }, 1800);
      } else if (stepId === 3) {
        // Step 3: Fast sprint + victory leap
        setPosX(-95);
        setCurrentBlockIndex(0);
        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('Sprinting across the track! 🏎️');
          jrSounds.playWhoosh();
          setPosX(45);
        }, 300);
        schedule(() => {
          setCurrentBlockIndex(2);
          setStatusMessage('Victory leap across finish! 🏁');
          jrSounds.playBoing();
          setPosY(-50);
          setPosX(85);
        }, 750);
        schedule(() => {
          setPosY(0);
          jrSounds.playSuccess();
          setSpeech('Winner! 🏆');
        }, 1150);
        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Fast sprint complete!');
        }, 2600);
      } else if (stepId === 4) {
        // Step 4: Repeat Forever Turbo Laps
        setPosX(-95);
        setCurrentBlockIndex(0);
        setStatusMessage('Forever looping race! 🔄');

        // Lap 1
        schedule(() => {
          setLapCount(1);
          jrSounds.playWhoosh();
          setPosX(85);
        }, 300);

        // Wrap around to start
        schedule(() => {
          setPosX(-95);
        }, 800);

        // Lap 2
        schedule(() => {
          setLapCount(2);
          jrSounds.playWhoosh();
          setPosX(85);
        }, 950);

        // Wrap around
        schedule(() => {
          setPosX(-95);
        }, 1450);

        // Lap 3
        schedule(() => {
          setLapCount(3);
          jrSounds.playWhoosh();
          setPosX(40);
        }, 1600);

        schedule(() => {
          jrSounds.playSuccess();
          setSpeech('Endless race! 🏁');
          setCurrentBlockIndex(3);
        }, 2000);

        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Completed 3 fast laps! Loop ready.');
        }, 3500);
      }
    }

    // ----------------------------------------
    // WEEK 10: CARNIVAL & GRADUATION
    // ----------------------------------------
    else if (weekNumber === 10) {
      if (stepId === 1) {
        // Step 1: Masterpiece carnival show (Walk -> Hop -> Say -> End)
        setPosX(-60);
        setCurrentBlockIndex(0);

        schedule(() => {
          setCurrentBlockIndex(1);
          setStatusMessage('1. Marching onto stage...');
          setPosX(-10);
          jrSounds.playPop();
        }, 300);

        schedule(() => {
          setCurrentBlockIndex(2);
          setStatusMessage('2. Carnival Hop! 🎪');
          jrSounds.playBoing();
          setPosY(-45);
        }, 750);
        schedule(() => setPosY(0), 1100);

        schedule(() => {
          setCurrentBlockIndex(3);
          jrSounds.playWeekComplete();
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
          setSpeech('I am a Coding Master! 🎓');
          setStatusMessage('Grand Carnival announcement!');
        }, 1300);

        schedule(() => {
          setSpeech(null);
          setCurrentBlockIndex(null);
          setIsPlaying(false);
          setStatusMessage('Masterpiece show complete!');
        }, 3600);
      } else if (stepId === 2) {
        // Step 2: Full Screen Presentation Cinema Mode
        setIsCinemaMode(true);
        jrSounds.playSuccess();
        setStatusMessage('Cinema Presentation Mode Activated! 🎬');
        setSpeech('Big Screen Mode! 🍿');
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
        }, 2500);
      } else if (stepId === 3) {
        // Step 3: Classmate walkabout & High Fives
        jrSounds.playPop();
        setStatusMessage('Classmate High-Fives! ✋⭐');
        setSpeech('High Five! ✋ Awesome game!');
        schedule(() => {
          jrSounds.playStepComplete();
          setSpeech('Great job coding! ⭐');
        }, 1500);
        schedule(() => {
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Showcased to classmates!');
        }, 3000);
      } else if (stepId === 4) {
        // Step 4: Claim Graduation Certificate
        jrSounds.playWeekComplete();
        confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
        setStatusMessage('Official Graduation Certificate Award! 🎓🏆');
        setScale(1.25);
        setSpeech('Coding Master Certified! 🎓✨');
        schedule(() => {
          setScale(1);
          setSpeech(null);
          setIsPlaying(false);
          setStatusMessage('Certificate ready to print!');
        }, 3500);
      }
    }

    // ----------------------------------------
    // FALLBACK FOR ANY OTHER COMBINATION
    // ----------------------------------------
    else {
      jrSounds.playStepComplete();
      setPosY(-30);
      schedule(() => {
        setPosY(0);
        setIsPlaying(false);
        setStatusMessage('Done!');
      }, 500);
    }
  };

  // Determine stage background styling based on week theme
  const getStageTheme = () => {
    switch (weekNumber) {
      case 1:
        // Sunny Park
        return {
          bg: 'bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-200',
          ground: 'bg-emerald-500 border-t-4 border-emerald-600',
          decor: '🌸 🌼 🌻',
          themeName: 'Sunny Park Stage',
        };
      case 2:
        // Tap Arena
        return {
          bg: 'bg-gradient-to-b from-amber-200 via-orange-100 to-amber-300',
          ground: 'bg-amber-400 border-t-4 border-amber-500',
          decor: '⭐ 🎈 ✨',
          themeName: 'Tap Arena',
        };
      case 3:
        // River Crossing
        return {
          bg: 'bg-gradient-to-b from-sky-300 via-sky-100 to-blue-200',
          ground: 'bg-emerald-500 border-t-4 border-emerald-600',
          decor: '🌊 River & Stepping Stones 🪨',
          themeName: 'Riverbank & Stepping Stones',
        };
      case 4:
        // Honey Tree
        return {
          bg: 'bg-gradient-to-b from-sky-300 to-amber-100',
          ground: 'bg-emerald-600 border-t-4 border-emerald-700',
          decor: '🌳 Honey Tree 🍯',
          themeName: 'Tall Honey Tree',
        };
      case 5:
        // Gymnastics Gym
        return {
          bg: 'bg-gradient-to-b from-purple-200 via-indigo-100 to-blue-100',
          ground: 'bg-blue-500 border-t-4 border-blue-600',
          decor: '🎪 Gymnastic Floor Mat',
          themeName: 'Gymnastics Floor',
        };
      case 6:
        // Magic Theater
        return {
          bg: 'bg-gradient-to-b from-purple-900 via-indigo-900 to-slate-900',
          ground: 'bg-purple-800 border-t-4 border-amber-400',
          decor: '🪄 Magic Theater Curtain 🎭',
          themeName: 'Magic Disguise Stage',
        };
      case 7:
        // Disco Party
        return {
          bg: 'bg-gradient-to-b from-slate-900 via-purple-900 to-indigo-950',
          ground: 'bg-pink-600 border-t-4 border-cyan-400',
          decor: '🪩 Disco Dance Floor 🎵',
          themeName: 'Disco Dance Party',
        };
      case 8:
        // Meadow with Rabbit
        return {
          bg: 'bg-gradient-to-b from-sky-200 via-teal-100 to-emerald-100',
          ground: 'bg-emerald-500 border-t-4 border-emerald-600',
          decor: '🌿 Meadow & Friends 🌸',
          themeName: 'Friendly Animal Meadow',
        };
      case 9:
        // Grand Prix Racetrack
        return {
          bg: 'bg-gradient-to-b from-sky-300 to-slate-300',
          ground: 'bg-slate-700 border-t-4 border-red-500',
          decor: '🏁 Grand Prix Track 🏎️',
          themeName: 'Turbo Racetrack',
        };
      case 10:
        // Carnival & Graduation
        return {
          bg: 'bg-gradient-to-b from-amber-200 via-pink-200 to-purple-200',
          ground: 'bg-amber-500 border-t-4 border-yellow-400',
          decor: '🎪 Carnival Bunting & Confetti 🎉',
          themeName: 'Carnival & Graduation Show',
        };
      default:
        return {
          bg: 'bg-gradient-to-b from-sky-200 to-emerald-100',
          ground: 'bg-emerald-400 border-t-2 border-emerald-500',
          decor: '🌱',
          themeName: 'Coding Stage',
        };
    }
  };

  const theme = getStageTheme();

  return (
    <div className="bg-sky-50/90 border-2 border-sky-300 rounded-3xl p-4 my-3 shadow-md">
      {/* Simulator Top Header */}
      <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-sky-200 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-lg">🎮</span>
          <span className="font-['Fredoka',sans-serif] font-bold text-xs sm:text-sm text-sky-950">
            {theme.themeName}
          </span>
          <span className="text-[11px] font-bold text-sky-700 bg-sky-100 border border-sky-200 px-2 py-0.5 rounded-full">
            Week {weekNumber} • Step {(step?.id || stepIndex + 1)}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              isPlaying ? 'bg-emerald-500 animate-ping' : 'bg-slate-400'
            }`}
          />
          <span className="font-['Fredoka',sans-serif] text-[11px] text-slate-700">
            {statusMessage}
          </span>
        </div>
      </div>

      {/* Mini Code Sequence Display (Active Highlight) */}
      {step?.blocks && step.blocks.length > 0 && (
        <div className="mb-3 bg-white/80 p-2 rounded-2xl border border-sky-200 flex items-center gap-1.5 overflow-x-auto shadow-inner">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-['Fredoka',sans-serif] px-1 shrink-0">
            Code:
          </span>
          {step.blocks.map((blk: JrBlock, idx: number) => {
            const isActive = currentBlockIndex === idx;
            return (
              <div
                key={idx}
                className={`px-2 py-1 rounded-xl text-[11px] font-bold font-['Fredoka',sans-serif] flex items-center gap-1 shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'scale-105 shadow-md ring-2 ring-amber-400 font-black'
                    : 'opacity-85'
                } ${
                  blk.category === 'trigger'
                    ? 'bg-amber-300 text-amber-950'
                    : blk.category === 'motion'
                    ? 'bg-sky-400 text-white'
                    : blk.category === 'looks'
                    ? 'bg-purple-400 text-white'
                    : blk.category === 'sound'
                    ? 'bg-emerald-400 text-white'
                    : blk.category === 'control'
                    ? 'bg-orange-400 text-white'
                    : 'bg-rose-400 text-white'
                }`}
              >
                <span>{blk.label}</span>
                {blk.value !== undefined && (
                  <span className="bg-black/20 px-1 rounded-sm text-[10px]">
                    {blk.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive Stage Canvas */}
      <div
        className={`relative w-full ${
          isCinemaMode ? 'h-48 sm:h-56 ring-4 ring-purple-600' : 'h-36 sm:h-40'
        } ${theme.bg} rounded-2xl border-2 border-sky-400 overflow-hidden flex items-center justify-center transition-all duration-500 shadow-inner select-none`}
      >
        {/* Background Stage Elements */}
        {/* Week 1 Sun */}
        {weekNumber === 1 && (
          <div className="absolute top-2 right-4 text-3xl animate-pulse">☀️</div>
        )}

        {/* Week 3 River in center */}
        {weekNumber === 3 && (
          <>
            <div className="absolute top-0 bottom-6 left-1/2 -translate-x-1/2 w-28 bg-blue-400/80 border-x-2 border-blue-500 flex flex-col items-center justify-around">
              <span className="text-xs text-blue-100 font-bold tracking-widest opacity-80">
                〰️ RIVER 〰️
              </span>
              <div className="w-8 h-4 bg-stone-400 rounded-full border border-stone-600 shadow-sm" />
            </div>
            <div className="absolute bottom-6 left-4 text-xs font-bold text-emerald-800">
              Grass Bank
            </div>
            <div className="absolute bottom-6 right-4 text-xs font-bold text-emerald-800">
              Other Side
            </div>
          </>
        )}

        {/* Week 4 Tree */}
        {weekNumber === 4 && (
          <>
            <div className="absolute top-0 right-1/3 w-14 h-full bg-amber-800/80 border-x-2 border-amber-900 flex flex-col items-center justify-between">
              <div className="w-32 h-16 bg-emerald-500 rounded-full -mt-6 border-2 border-emerald-600 flex items-center justify-center text-xs text-emerald-950 font-bold shadow-sm">
                🍃 Canopy
              </div>
              <div className="text-xl mb-12">🍯</div>
            </div>
          </>
        )}

        {/* Week 7 Disco lights */}
        {weekNumber === 7 && (
          <div className="absolute top-2 text-2xl animate-bounce">🪩</div>
        )}

        {/* Week 9 Racetrack finish line */}
        {weekNumber === 9 && (
          <div className="absolute top-0 bottom-6 right-6 w-8 bg-white flex flex-col justify-between py-1 border-x border-slate-900 opacity-90">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-full h-2 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}
              />
            ))}
          </div>
        )}

        {/* Ground */}
        <div className={`absolute bottom-0 w-full h-8 ${theme.ground} flex items-center justify-between px-3 text-[11px] text-white/90 font-bold`}>
          <span>{theme.decor}</span>
          {lapCount > 0 && (
            <span className="bg-black/40 px-2 py-0.5 rounded-full text-amber-300">
              🏁 Lap: {lapCount}
            </span>
          )}
        </div>

        {/* Animated Stopwatch for Wait block */}
        {isWaitingTimer !== null && (
          <div className="absolute top-3 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-orange-700 shadow-lg border-2 border-orange-400 flex items-center gap-1.5 animate-pulse z-30">
            <Clock className="w-4 h-4 text-orange-500 animate-spin" />
            <span>Waiting: {isWaitingTimer}s</span>
          </div>
        )}

        {/* Bump Stars Effect (Week 8) */}
        {bumpEffect && (
          <div className="absolute text-3xl font-black animate-ping text-amber-400 z-30 drop-shadow-md">
            ⭐ BONK! ⭐
          </div>
        )}

        {/* Tap Finger Indicator (Week 2 & 6) */}
        {showTapHand && (
          <div
            className="absolute z-30 text-3xl animate-bounce cursor-pointer transition-all"
            style={{
              transform: `translate(${posX}px, ${posY - 35}px)`
            }}
            onClick={runSimulation}
          >
            👆
          </div>
        )}

        {/* Speech Bubble for Tobi */}
        {speech && (
          <div
            className="absolute bg-white px-3.5 py-1.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 shadow-xl border-2 border-amber-400 animate-bounce z-40 transition-all font-['Fredoka',sans-serif]"
            style={{
              transform: `translate(${posX}px, ${posY - 48}px)`
            }}
          >
            💬 {speech}
          </div>
        )}

        {/* Main Character: Tobi the Bear */}
        <div
          onClick={runSimulation}
          className="text-4xl sm:text-5xl transition-all duration-300 select-none z-20 cursor-pointer filter drop-shadow-lg hover:scale-105 active:scale-95"
          style={{
            transform: `translate(${posX}px, ${posY}px) scale(${scale}) rotate(${rotation}deg)`,
            opacity: opacity
          }}
          title="Click to run Tobi's code!"
        >
          🐻
        </div>

        {/* Rabbit Friend for Week 8 Animal Bump */}
        {weekNumber === 8 && (
          <>
            {rabbitSpeech && (
              <div
                className="absolute bg-white px-3 py-1 rounded-2xl text-xs font-bold text-purple-900 shadow-xl border-2 border-purple-400 animate-bounce z-40 font-['Fredoka',sans-serif]"
                style={{
                  transform: `translate(60px, ${rabbitPosY - 45}px)`
                }}
              >
                💬 {rabbitSpeech}
              </div>
            )}
            <div
              className="absolute text-3xl sm:text-4xl transition-all duration-300 z-10 filter drop-shadow-md"
              style={{
                transform: `translate(60px, ${rabbitPosY}px)`
              }}
            >
              🐰
            </div>
          </>
        )}
      </div>

      {/* Simulator Controls & Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 mt-3">
        <div className="text-xs text-slate-600 font-bold flex items-center gap-1.5">
          <span className="text-amber-500">💡</span>
          <span>Click the button or tap Tobi directly to see the code in action!</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Main Action Button */}
          <button
            onClick={runSimulation}
            disabled={isPlaying}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl shadow-md transition transform active:scale-95 ${
              isPlaying
                ? 'bg-amber-400 cursor-wait'
                : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Running Code...</span>
              </>
            ) : weekNumber === 2 || weekNumber === 6 ? (
              <>
                <Hand className="w-4 h-4 text-amber-200" />
                <span>Tap Tobi ▶️</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Tobi ▶️</span>
              </>
            )}
          </button>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition active:scale-95 shadow-xs"
            title="Reset stage to start position"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};
