import { Lesson } from '../types';

export const curriculumData: Lesson[] = [
  {
    week: 1,
    title: "Dance Party & Animated Letters",
    tagline: "Bring your name to life with sounds, colours, and dance moves!",
    badge: {
      name: "Algorithm Ace",
      icon: "🎉",
      description: "Mastered sequences, events, and sprite animation!"
    },
    csConcept: "Sequence & Events",
    bigIdea: "Computers need precise step-by-step instructions (an algorithm) and trigger events (like pressing the Green Flag or clicking a sprite) to wake up and act!",
    equipmentNeeds: "Computers with browser, headphones/speakers, Scratch editor open.",
    steps: [
      {
        id: 1,
        title: "Create Your Project & Pick a Stage",
        actionText: "Open Scratch, delete the cat sprite, and click 'Choose a Backdrop' in the bottom-right corner. Pick 'Concert' or 'Spotlight'!",
        tip: "You can find great dance backgrounds under the 'Music' tab in the backdrop library.",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [Concert v]"
          }
        ],
        spotCheck: "Do you see a colourful concert stage on your screen with no cat?"
      },
      {
        id: 2,
        title: "Add the First Letter of Your Name",
        actionText: "Click 'Choose a Sprite', search for 'Letters', and choose the first letter of your name. Place it on the stage.",
        tip: "You can change its size in the Sprite properties box below the stage if it looks too small (try size 140).",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when this sprite clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "change [color v] effect by (25)"
          }
        ],
        spotCheck: "Click on your letter on the stage. Does it change to a new bright colour every time you click?"
      },
      {
        id: 3,
        title: "Make Your Letter Spin & Dance",
        actionText: "Add motion blocks so when you press the Space key, your letter spins in a full 360-degree circle!",
        tip: "10 times 36 degrees equals 360 degrees—a full turn!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [space v] key pressed"
          },
          {
            category: "control",
            shape: "c-block",
            text: "repeat (10)",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "turn [clockwise] (36) degrees"
              },
              {
                category: "control",
                shape: "stack",
                text: "wait (0.05) seconds"
              }
            ]
          }
        ],
        spotCheck: "Press the Space bar on your keyboard. Does your letter do a smooth 360 spin?"
      },
      {
        id: 4,
        title: "Add Musical Beats & Sounds",
        actionText: "Go to the 'Sounds' tab, search for a cool drum or beat (like 'Dance Celebrate' or 'Drum Snare'), and play it when clicked.",
        tip: "Use 'start sound' instead of 'play sound until done' if you want the music and motion to happen at the same time!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when this sprite clicked"
          },
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Dance Celebrate v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "change size by (20)"
          },
          {
            category: "control",
            shape: "stack",
            text: "wait (0.1) seconds"
          },
          {
            category: "looks",
            shape: "stack",
            text: "change size by (-20)"
          }
        ],
        spotCheck: "Click your letter. Does it pop larger to the beat and return to normal size?"
      },
      {
        id: 5,
        title: "Spell Your Whole Name or Add a Dancer",
        actionText: "Add 2 more letters or a dancing character (like 'Cassie Dance' or 'Giga'). Give each their own unique dance move!",
        tip: "You can drag and drop code blocks from one sprite directly onto another sprite to copy the code quickly!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "set [color v] effect to (0)"
          },
          {
            category: "motion",
            shape: "stack",
            text: "point in direction (90)"
          }
        ],
        spotCheck: "Click the Green Flag to reset your characters. Does everything reset cleanly and start dancing?"
      }
    ],
    bugHunt: {
      title: "The Stuck-Sideways Sprite",
      scenario: "Leo coded his letter 'L' to turn 45 degrees, but after clicking it once, the letter is permanently tilted and upside-down!",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [space v] key pressed"
        },
        {
          category: "motion",
          shape: "stack",
          text: "turn [clockwise] (45) degrees"
        }
      ],
      clue: "Computers remember their last position unless you tell them where to start when the Green Flag is clicked!",
      solutionExplanation: "Add a 'when green flag clicked' block with 'point in direction 90' so the sprite resets to facing upright every time you start!",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [green flag] clicked"
        },
        {
          category: "motion",
          shape: "stack",
          text: "point in direction (90)"
        }
      ]
    },
    spicyChallenge: {
      title: "Disco Strobe Lighting",
      rewardStars: 3,
      description: "Code the stage Backdrop itself to cycle through psychedelic colour effects continuously while a backing drum loop plays in a forever loop!",
      hint: "Click on the 'Stage' on the far right and use a 'forever' loop with 'change color effect by 10'!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Design, write and debug programs that accomplish specific goals; understand that programs execute by following precise and unambiguous instructions.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Pupils log into computers, open Scratch, and complete an 'unplugged' dance sequence game.",
        liveDemo: "10 mins: Tutor demonstrates creating 1 letter, colour effect, and the repeat-10 spin on projector.",
        handsOnCoding: "30 mins: Pupils code their names, experiment with sounds, and try the Spicy Challenge.",
        peerReviewAndDebug: "10 mins: Bug Hunter puzzle review + pupils test their neighbor's dance party.",
        packDownAndDismissal: "5 mins: Save project names (e.g. 'Dance_Party_Alex'), log off, dismiss to parents."
      },
      commonTraps: [
        "Pupils forget to click the sprite they want to code and accidentally code the Stage instead.",
        "Sound doesn't play because computer volume is muted or headphones are unplugged.",
        "Sprite grows huge because 'change size by 20' was not followed by a reset or 'change size by -20'."
      ],
      differentiationTips: "For struggling typists: Focus on just 2 letters or initials rather than full names. For advanced pupils: Challenge them to add costume animation loops to dancing characters."
    }
  },
  {
    week: 2,
    title: "Space Maze Runner",
    tagline: "Guide a rocket ship across the Cartesian galaxy using keyboard controls!",
    badge: {
      name: "Navigator",
      icon: "🚀",
      description: "Mastered X and Y coordinate movement and keyboard input!"
    },
    csConcept: "Coordinates (X & Y axes) & Inputs",
    bigIdea: "Everything on the computer screen has an address! X is horizontal (left/right) and Y is vertical (up/down). Changing these coordinates moves your sprite across the 2D grid.",
    equipmentNeeds: "Scratch editor, keyboard with arrow keys.",
    steps: [
      {
        id: 1,
        title: "Set Up the Space Rocket & Starting Point",
        actionText: "Choose the 'Rocketship' sprite and set its size to 50. Add a 'Space' backdrop.",
        tip: "Smaller sprites are much easier to steer through tight maze corridors!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (-200) y: (140)"
          },
          {
            category: "motion",
            shape: "stack",
            text: "point in direction (90)"
          }
        ],
        spotCheck: "Press the Green Flag. Does your rocket always snap to the top-left corner?"
      },
      {
        id: 2,
        title: "Code Horizontal Movement (X-Axis)",
        actionText: "Add code so pressing the Right Arrow moves the rocket right (+X), and Left Arrow moves it left (-X).",
        tip: "Positive numbers move RIGHT, negative numbers with a minus sign move LEFT!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [right arrow v] key pressed"
          },
          {
            category: "motion",
            shape: "stack",
            text: "point in direction (90)"
          },
          {
            category: "motion",
            shape: "stack",
            text: "change x by (10)"
          }
        ],
        spotCheck: "Press the Right and Left arrows. Does your rocket glide sideways and point where it is going?"
      },
      {
        id: 3,
        title: "Code Vertical Movement (Y-Axis)",
        actionText: "Add controls for the Up Arrow (+Y) and Down Arrow (-Y).",
        tip: "Remember: 'Y to the Sky' means positive Y goes UP, negative Y goes DOWN!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [up arrow v] key pressed"
          },
          {
            category: "motion",
            shape: "stack",
            text: "point in direction (0)"
          },
          {
            category: "motion",
            shape: "stack",
            text: "change y by (10)"
          }
        ],
        spotCheck: "Press all 4 arrow keys. Can you pilot your rocket smoothly anywhere on the screen?"
      },
      {
        id: 4,
        title: "Draw Maze Asteroid Walls",
        actionText: "Click on the Stage -> Backdrops tab. Use the Brush or Rectangle tool with bright Green or Neon Blue to draw 3 simple maze barriers.",
        tip: "Leave plenty of room between walls so your rocket doesn't get jammed!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [MazeWalls v]"
          }
        ],
        spotCheck: "Do you have clear maze pathways leading from top-left to bottom-right?"
      },
      {
        id: 5,
        title: "Add a Rotating Goal Star",
        actionText: "Add a 'Star' sprite at the end of the maze (bottom-right: x: 200, y: -140). Make it spin continuously to attract the player!",
        tip: "Use a forever loop with 'turn 5 degrees' on the star sprite.",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (200) y: (-140)"
          },
          {
            category: "control",
            shape: "c-block",
            text: "forever",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "turn [clockwise] (5) degrees"
              }
            ]
          }
        ],
        spotCheck: "Does the goal star spin gently at the maze exit?"
      }
    ],
    bugHunt: {
      title: "The Inverted Rocket",
      scenario: "Maya pressed the Down Arrow, but her rocket kept flying UP instead of DOWN into the maze!",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [down arrow v] key pressed"
        },
        {
          category: "motion",
          shape: "stack",
          text: "change y by (10)"
        }
      ],
      clue: "To travel downwards on the Y-axis, you must decrease Y with a negative number!",
      solutionExplanation: "Change the number inside 'change y by' from positive 10 to negative -10.",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [down arrow v] key pressed"
        },
        {
          category: "motion",
          shape: "stack",
          text: "change y by (-10)"
        }
      ]
    },
    spicyChallenge: {
      title: "Rocket Thruster Particles",
      rewardStars: 3,
      description: "Use the Pen extension or create tiny clone sprites that appear behind the rocket and fade away to create a glowing rocket exhaust trail!",
      hint: "Check out the 'create clone of myself' block under Control!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Use logical reasoning to explain how some simple algorithms work and to detect and correct errors in algorithms and programs.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Coordinate grid game on whiteboard (Where is X=0, Y=0?).",
        liveDemo: "10 mins: Demonstrate X vs Y change blocks and why 'change x' is different from 'set x'.",
        handsOnCoding: "30 mins: Pupils code 4-way arrow controls and sketch their maze walls.",
        peerReviewAndDebug: "10 mins: Bug Hunt walkthrough + pair test steering controls.",
        packDownAndDismissal: "5 mins: Ensure projects are saved; pack up headphones."
      },
      commonTraps: [
        "Confusing 'set x to (10)' (teleports to coordinate 10) with 'change x by (10)' (moves 10 steps right).",
        "Confusing X (horizontal) and Y (vertical).",
        "Sprite draws lines because kids accidentally turned on the pen tool."
      ],
      differentiationTips: "Display a large printed X/Y axis chart on the wall. Encourage pupils to use the 'change x' and 'change y' blocks rather than 'move 10 steps'."
    }
  },
  {
    week: 3,
    title: "Maze Master: Wall Collisions & Win Portal",
    tagline: "Stop cheating through walls with conditional sensing logic!",
    badge: {
      name: "Logic Guardian",
      icon: "🛡️",
      description: "Mastered conditional statements (IF-THEN) and color collision detection!"
    },
    csConcept: "Conditionals (Selection) & Sensing",
    bigIdea: "Selection lets a program make decisions! 'IF I touch a green wall, THEN push me back. IF I touch the golden star, THEN cheer!'",
    equipmentNeeds: "Scratch editor, maze project from Week 2.",
    steps: [
      {
        id: 1,
        title: "Continuous Sensing Loop",
        actionText: "Open your rocket maze project. Under the rocket's Green Flag script, add a 'forever' loop so the computer continuously checks for collisions 60 times a second.",
        tip: "Without a forever loop, the computer will only check for wall touches for a split second when the green flag is clicked and then stop!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "control",
            shape: "c-block",
            text: "forever",
            nestedBlocks: [
              {
                category: "control",
                shape: "c-block",
                text: "if <touching color [#00ff00]?> then",
                nestedBlocks: [
                  {
                    category: "sound",
                    shape: "stack",
                    text: "start sound [Boing v]"
                  },
                  {
                    category: "motion",
                    shape: "stack",
                    text: "go to x: (-200) y: (140)"
                  }
                ]
              }
            ]
          }
        ],
        spotCheck: "Drive your rocket into a maze wall. Does it make a 'Boing' sound and teleport back to the start?"
      },
      {
        id: 2,
        title: "Exact Colour Eyedropper Matching",
        actionText: "In the 'touching color' block, click the colour circle, then click the Eyedropper tool at the bottom. Click directly on your maze wall.",
        tip: "Even a tiny shade difference (like light green vs dark green) will stop the sensor from detecting the wall!",
        blocks: [
          {
            category: "sensing",
            shape: "boolean",
            text: "touching color [eyedropper exact color]?"
          }
        ],
        spotCheck: "Check if the colour circle in your block matches your maze walls perfectly."
      },
      {
        id: 3,
        title: "Smooth Wall Bounce (No Teleporting)",
        actionText: "Instead of teleporting all the way back to start, make the rocket simply bounce backwards 10 steps so it cannot pass through walls!",
        tip: "If you were moving with 'change x by 10', bounce back with 'change x by -10'!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <touching color [#00ff00]?> then",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "move (-10) steps"
              }
            ]
          }
        ],
        spotCheck: "Try driving through the wall. Does the wall act like solid concrete that pushes you back?"
      },
      {
        id: 4,
        title: "Detecting the Win Portal / Star",
        actionText: "Inside the same forever loop, add another 'if' statement checking if the rocket is touching the Star sprite.",
        tip: "Use the 'touching [Sprite v]?' sensor from the light blue Sensing category.",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <touching [Star v]?> then",
            nestedBlocks: [
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Win v]"
              },
              {
                category: "looks",
                shape: "stack",
                text: "say [You Won! Level 1 Complete!] for (2) secs"
              },
              {
                category: "control",
                shape: "cap",
                text: "stop [all v]"
              }
            ]
          }
        ],
        spotCheck: "Navigate to the star without touching walls. Does a victory message pop up and stop the game?"
      },
      {
        id: 5,
        title: "Add a Patrol Alien Hazard",
        actionText: "Add an 'Alien' sprite inside one of the maze corridors. Give it code to glide back and forth like an enemy guard!",
        tip: "Use 'glide 2 secs to x: y:' between two coordinates in a forever loop.",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "forever",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "glide (2) secs to x: (50) y: (0)"
              },
              {
                category: "motion",
                shape: "stack",
                text: "glide (2) secs to x: (-50) y: (0)"
              }
            ]
          }
        ],
        spotCheck: "Does the patrol alien patrol the hallway smoothly?"
      }
    ],
    bugHunt: {
      title: "The Ghost Rocket",
      scenario: "Sam added the 'if touching color green then go to start' block, but the rocket passes straight through walls as if they aren't even there!",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [green flag] clicked"
        },
        {
          category: "control",
          shape: "c-block",
          text: "if <touching color [#00ff00]?> then",
          nestedBlocks: [
            {
              category: "motion",
              shape: "stack",
              text: "go to x: (-200) y: (140)"
            }
          ]
        }
      ],
      clue: "The computer only checked this once on startup. How do we make the computer check over and over again forever?",
      solutionExplanation: "Wrap the 'if touching color' block inside a 'forever' loop so the computer continuously checks during the entire game!",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [green flag] clicked"
        },
        {
          category: "control",
          shape: "c-block",
          text: "forever",
          nestedBlocks: [
            {
              category: "control",
              shape: "c-block",
              text: "if <touching color [#00ff00]?> then",
              nestedBlocks: [
                {
                  category: "motion",
                  shape: "stack",
                  text: "go to x: (-200) y: (140)"
                }
              ]
            }
          ]
        }
      ]
    },
    spicyChallenge: {
      title: "Teleport Wormholes",
      rewardStars: 4,
      description: "Create two purple vortex portals in your maze. When the rocket touches Portal A, it instantly warps across the maze to Portal B with a zapping sound!",
      hint: "Use 'if touching [PortalA v] then go to x: (PortalB X) y: (PortalB Y) wait (0.5) secs'!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Design, write and debug programs that accomplish specific goals; use sequence, selection, and repetition in programs.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: 'If-Then' real life game (If teacher raises hand, pupils stand up).",
        liveDemo: "10 mins: Demonstrate the 'Eyedropper' tool and why 'forever' loops are vital for sensing.",
        handsOnCoding: "30 mins: Pupils implement wall detection, win conditions, and alien patrols.",
        peerReviewAndDebug: "10 mins: Bug hunt discussion and playtesting partners' mazes.",
        packDownAndDismissal: "5 mins: Safe log-off and tidy workspace."
      },
      commonTraps: [
        "Pupil clicked a slightly different pixel shade of green with the eyedropper.",
        "Forgetting the 'forever' wrapper around the 'if' condition.",
        "Placing the win condition block inside another sprite without proper coordination."
      ],
      differentiationTips: "For pupils who find drawing mazes difficult, provide a pre-drawn maze backdrop or keep walls thick with single straight lines."
    }
  },
  {
    week: 4,
    title: "Fruit Catcher: Loops & Randomness",
    tagline: "Catch delicious apples falling from random spots in the sky!",
    badge: {
      name: "Loop Master",
      icon: "🍎",
      description: "Mastered repetition loops, velocity, and random number generation!"
    },
    csConcept: "Repetition & Random Number Generation",
    bigIdea: "Randomness keeps games exciting! If an apple always fell in the exact same spot, the game would be boring. We use 'pick random' so no two games are ever identical.",
    equipmentNeeds: "Scratch editor with sound enabled.",
    steps: [
      {
        id: 1,
        title: "Player Controlled Basket / Bowl",
        actionText: "Choose a 'Bowl' sprite. Position it at the bottom of the screen (y: -140). Make it follow the player's mouse or arrow keys horizontally.",
        tip: "Setting 'set x to (mouse x)' creates super-smooth mouse controls!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "control",
            shape: "c-block",
            text: "forever",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "set x to (mouse x)"
              }
            ]
          }
        ],
        spotCheck: "Move your mouse left and right across the stage. Does the bowl glide with your mouse while staying at the bottom?"
      },
      {
        id: 2,
        title: "Spawning Apples at the Top",
        actionText: "Add an 'Apple' sprite. When the green flag is clicked, send it to the top of the screen (y: 160) at a random X coordinate between -200 and +200.",
        tip: "The screen width ranges from X: -240 (far left) to X: +240 (far right).",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (pick random (-200) to (200)) y: (160)"
          }
        ],
        spotCheck: "Click the Green Flag 5 times. Does the apple appear at a different spot at the top each time?"
      },
      {
        id: 3,
        title: "Make the Apple Fall with Gravity",
        actionText: "Inside a forever loop, decrease the apple's Y position by 5 so it falls smoothly towards the ground.",
        tip: "A bigger negative number (like -10) makes the apple fall faster and harder to catch!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "forever",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "change y by (-5)"
              }
            ]
          }
        ],
        spotCheck: "Does your apple drop smoothly straight down towards the bottom of the stage?"
      },
      {
        id: 4,
        title: "Catching the Apple in the Bowl",
        actionText: "Check if the falling apple touches the bowl. If it does, play a 'Chomp' sound and send it back to the top at a new random X spot!",
        tip: "Re-using the same apple saves memory and keeps your code neat!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <touching [Bowl v]?> then",
            nestedBlocks: [
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Chomp v]"
              },
              {
                category: "motion",
                shape: "stack",
                text: "go to x: (pick random (-200) to (200)) y: (160)"
              }
            ]
          }
        ],
        spotCheck: "Move your bowl under the apple. Does it chomp and immediately respawn at the top?"
      },
      {
        id: 5,
        title: "Resetting if the Apple Hits the Floor",
        actionText: "If the player misses and the apple reaches the bottom (y position < -150), respawn it at the top so the game never stops.",
        tip: "Find the '<' operator in the green Operators category.",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <(y position) < [-150]> then",
            nestedBlocks: [
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Pop v]"
              },
              {
                category: "motion",
                shape: "stack",
                text: "go to x: (pick random (-200) to (200)) y: (160)"
              }
            ]
          }
        ],
        spotCheck: "Let an apple drop to the floor. Does it pop and respawn at the top?"
      }
    ],
    bugHunt: {
      title: "The Clustered Apples",
      scenario: "Liam wanted 3 apples falling, but all 3 always dropped down in the exact same straight line on top of each other!",
      buggyCode: [
        {
          category: "motion",
          shape: "stack",
          text: "go to x: (0) y: (160)"
        }
      ],
      clue: "Look at the X coordinate! Is it fixed or random?",
      solutionExplanation: "Replace the fixed number 0 with a green 'pick random (-200) to (200)' block.",
      fixedCode: [
        {
          category: "motion",
          shape: "stack",
          text: "go to x: (pick random (-200) to (200)) y: (160)"
        }
      ]
    },
    spicyChallenge: {
      title: "Poison Lightning Bug",
      rewardStars: 4,
      description: "Add a second falling sprite (like a lightning bug or bomb). If the player catches it by accident, play an explosion sound and pause the game!",
      hint: "Duplicate the apple sprite, change the costume to a lightning bolt or insect, and change sound to 'Crunch' or 'Oops'!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Work with variables and various forms of input and output; generate random numbers.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Unplugged dice rolling to explain computational randomness.",
        liveDemo: "10 mins: Demonstrate 'pick random' inside 'go to x: y:' on the main board.",
        handsOnCoding: "30 mins: Pupils build the falling fruit catcher mechanics.",
        peerReviewAndDebug: "10 mins: Bug hunt + test partner's game difficulty balance.",
        packDownAndDismissal: "5 mins: Save project ('Fruit_Catcher_Name') and log out."
      },
      commonTraps: [
        "Pupils use positive 'change y by 5', sending the apple flying up off the screen.",
        "Pupils put 'go to x: random y: 160' outside the loop so it only respawns once.",
        "Bowl sprite gets dragged with the cursor if pupils don't click the green flag to run the script."
      ],
      differentiationTips: "Offer keyboard arrow keys as an alternative to mouse controls for pupils with fine motor challenges."
    }
  },
  {
    week: 5,
    title: "Scoreboards & Lives: Variables & State",
    tagline: "Track high scores and game overs like real arcade developers!",
    badge: {
      name: "Variable Virtuoso",
      icon: "🏆",
      description: "Mastered variables for scoring, health points, and game-over state triggers!"
    },
    csConcept: "Variables & State Management",
    bigIdea: "A variable is like a labeled cardboard box in computer memory that holds a number. We can look inside it, add points to it, or take lives away when mistakes happen!",
    equipmentNeeds: "Scratch editor with Fruit Catcher project.",
    steps: [
      {
        id: 1,
        title: "Create Your 'Score' Variable",
        actionText: "Click the orange 'Variables' category on the left. Click 'Make a Variable' and name it 'Score'. Leave it checked so it displays on the stage.",
        tip: "Make sure 'For all sprites' is selected so any character can read and update the score.",
        blocks: [
          {
            category: "variables",
            shape: "reporter",
            text: "(Score)"
          }
        ],
        spotCheck: "Do you see a little orange 'Score: 0' monitor in the top-left corner of your stage?"
      },
      {
        id: 2,
        title: "Reset Score at Game Start",
        actionText: "On the stage or bowl sprite, add 'set Score to 0' under the green flag hat block.",
        tip: "Always reset variables when the game starts, otherwise yesterday's points stay on screen!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "variables",
            shape: "stack",
            text: "set [Score v] to (0)"
          }
        ],
        spotCheck: "Click the Green Flag. Does the score reliably reset to 0 every time?"
      },
      {
        id: 3,
        title: "Earn Points When Catching Fruit",
        actionText: "In the Apple sprite's script, find the block where it touches the bowl. Add 'change Score by 1'.",
        tip: "Golden fruit or rare items can give 'change Score by 5'!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <touching [Bowl v]?> then",
            nestedBlocks: [
              {
                category: "variables",
                shape: "stack",
                text: "change [Score v] by (1)"
              },
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Coin v]"
              }
            ]
          }
        ],
        spotCheck: "Catch 3 apples in a row. Does the score counter increment to 1, 2, and 3?"
      },
      {
        id: 4,
        title: "Add a 'Lives' Health Counter",
        actionText: "Create a second variable called 'Lives'. Set it to 3 when the game begins. When an apple hits the floor, take away 1 life!",
        tip: "Use 'change Lives by -1' to subtract a life.",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "variables",
            shape: "stack",
            text: "set [Lives v] to (3)"
          },
          {
            category: "control",
            shape: "c-block",
            text: "if <(y position) < [-150]> then",
            nestedBlocks: [
              {
                category: "variables",
                shape: "stack",
                text: "change [Lives v] by (-1)"
              },
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Lose v]"
              }
            ]
          }
        ],
        spotCheck: "Let an apple hit the ground. Does the Lives counter drop from 3 to 2?"
      },
      {
        id: 5,
        title: "Game Over When Lives Hit Zero",
        actionText: "Add a conditional check: If Lives equals 0, play a sad sound, say 'Game Over!', and stop all scripts.",
        tip: "Find the green '=' operator block to check if Lives = 0.",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <(Lives) = [0]> then",
            nestedBlocks: [
              {
                category: "looks",
                shape: "stack",
                text: "say [GAME OVER!] for (2) secs"
              },
              {
                category: "control",
                shape: "cap",
                text: "stop [all v]"
              }
            ]
          }
        ],
        spotCheck: "Miss 3 apples. Does the game freeze cleanly with a Game Over message?"
      }
    ],
    bugHunt: {
      title: "The Rocketing Score Bug",
      scenario: "Ruby caught 1 apple, but the score suddenly jumped from 0 straight to 42 in half a second!",
      buggyCode: [
        {
          category: "control",
          shape: "c-block",
          text: "if <touching [Bowl v]?> then",
          nestedBlocks: [
            {
              category: "variables",
              shape: "stack",
              text: "change [Score v] by (1)"
            }
          ]
        }
      ],
      clue: "If the apple stays touching the bowl for multiple frames, the computer adds 1 on every single frame! How do we move it away immediately?",
      solutionExplanation: "Immediately teleport the apple back to the top (y: 160) inside the IF block right after changing the score!",
      fixedCode: [
        {
          category: "control",
          shape: "c-block",
          text: "if <touching [Bowl v]?> then",
          nestedBlocks: [
            {
              category: "variables",
              shape: "stack",
              text: "change [Score v] by (1)"
            },
            {
              category: "motion",
              shape: "stack",
              text: "go to x: (pick random (-200) to (200)) y: (160)"
            }
          ]
        }
      ]
    },
    spicyChallenge: {
      title: "Speed Multiplier Boost",
      rewardStars: 4,
      description: "Create a 'Speed' variable. Every time the score reaches a multiple of 10, increase the falling speed so the game gets progressively harder!",
      hint: "Use 'change [Speed v] by (-1)' when score reaches 10, 20, 30!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Work with variables and various forms of input and output; design and debug programs with data persistence.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Real life memory box analogy (holding up a cardboard box labeled 'Points').",
        liveDemo: "10 mins: Demonstrate creating a variable, difference between 'set' and 'change'.",
        handsOnCoding: "30 mins: Pupils code Score and Lives variables into their catcher game.",
        peerReviewAndDebug: "10 mins: Bug hunt discussion and playtesting with friends.",
        packDownAndDismissal: "5 mins: Save project and ensure computer monitors are shut off."
      },
      commonTraps: [
        "Confusing 'set Score to 1' (permanently keeps it at 1) with 'change Score by 1' (adds 1 to previous value).",
        "Using positive 1 for decreasing lives instead of -1.",
        "Variables created under 'For this sprite only' cannot be seen by other sprites."
      ],
      differentiationTips: "Remind pupils that variables are just counters. Keep the variables visible on stage so they can visually verify values changing."
    }
  },
  {
    week: 6,
    title: "Broadcasting & Stage Transitions",
    tagline: "Send invisible radio signals between sprites to create multi-level games!",
    badge: {
      name: "Broadcast Commander",
      icon: "📡",
      description: "Mastered message broadcasting, scene changes, and stage coordination!"
    },
    csConcept: "Message Passing & Event Broadcasting",
    bigIdea: "Broadcasting is like a school fire alarm or walkie-talkie! One sprite shouts a secret message (like 'Game Start!'), and all other sprites hear it and react instantly.",
    equipmentNeeds: "Scratch editor, sprites library.",
    steps: [
      {
        id: 1,
        title: "Create a Start Screen & Play Button",
        actionText: "Draw or choose a title screen backdrop. Add a 'Button' sprite labeled 'PLAY' right in the center of the screen.",
        tip: "Type 'PLAY GAME' onto the button using the Scratch Vector costume text tool.",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [StartMenu v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "show"
          }
        ],
        spotCheck: "Click Green Flag. Do you see a clean Title Menu with the Play button visible?"
      },
      {
        id: 2,
        title: "Broadcast the 'Start Game' Signal",
        actionText: "When the player clicks the Play button, play a click sound, hide the button, and broadcast the message 'Start Game'!",
        tip: "Click 'New message' in the broadcast dropdown to type custom message names.",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when this sprite clicked"
          },
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Pop v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "hide"
          },
          {
            category: "events",
            shape: "stack",
            text: "broadcast [Start Game v]"
          }
        ],
        spotCheck: "Click the Play button on stage. Does it vanish cleanly?"
      },
      {
        id: 3,
        title: "Sprites Wake Up on Broadcast",
        actionText: "In your player character and enemy sprites, hide them on Green Flag, and only 'show' them when they receive 'Start Game'!",
        tip: "This prevents enemies from roaming around while the player is still on the title menu!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "hide"
          },
          {
            category: "events",
            shape: "hat",
            text: "when I receive [Start Game v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "show"
          }
        ],
        spotCheck: "Click Green Flag. Are characters hidden? Click Play Button. Do all characters appear ready to play?"
      },
      {
        id: 4,
        title: "Switching to Level 2",
        actionText: "When the player reaches 10 points, broadcast a new message: 'Level 2'!",
        tip: "The backdrop listens for 'when I receive Level 2' and switches to an exciting new arena (like 'Neon Tunnel').",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <(Score) = [10]> then",
            nestedBlocks: [
              {
                category: "events",
                shape: "stack",
                text: "broadcast [Level 2 v]"
              }
            ]
          },
          {
            category: "events",
            shape: "hat",
            text: "when I receive [Level 2 v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [Neon Tunnel v]"
          }
        ],
        spotCheck: "Score 10 points. Does the background transform automatically into Level 2?"
      },
      {
        id: 5,
        title: "Broadcast 'Game Over' Screen",
        actionText: "When Lives reach 0, broadcast 'Game Over'. Have a dark backdrop and a 'Try Again' button pop onto the screen.",
        tip: "Use 'stop [other scripts in sprite v]' so falling objects freeze instantly.",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when I receive [Game Over v]"
          },
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Screech v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [GameOverScreen v]"
          }
        ],
        spotCheck: "Lose all lives. Does the game transition to the Game Over scene smoothly?"
      }
    ],
    bugHunt: {
      title: "The Silent Receiver",
      scenario: "Ben clicked the Play button, but none of the game characters appeared on the screen!",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when this sprite clicked"
        },
        {
          category: "events",
          shape: "stack",
          text: "broadcast [Start Game v]"
        },
        {
          category: "events",
          shape: "hat",
          text: "when I receive [Play Game v]"
        },
        {
          category: "looks",
          shape: "stack",
          text: "show"
        }
      ],
      clue: "Compare the broadcast message name with the receiver message name carefully letter-by-letter!",
      solutionExplanation: "The button broadcasted 'Start Game', but the sprite was waiting for 'Play Game'. They must match exactly!",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when I receive [Start Game v]"
        },
        {
          category: "looks",
          shape: "stack",
          text: "show"
        }
      ]
    },
    spicyChallenge: {
      title: "Boss Fight Warning Siren",
      rewardStars: 5,
      description: "When reaching Level 3, broadcast 'Boss Warning'. Flash the screen red 3 times with siren sounds before an enormous Boss monster sprite appears!",
      hint: "Use 'repeat (3)' with 'set color effect to 50' and 'wait 0.2 secs' on the backdrop!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Understand how computer networks can provide multiple services, such as the World Wide Web; use message broadcasting for modular software design.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Walkie-talkie analogy demo with two pupil volunteers.",
        liveDemo: "10 mins: Demonstrate 'broadcast' and 'when I receive' on the whiteboard.",
        handsOnCoding: "30 mins: Pupils build Start Menu and Level 2 transitions.",
        peerReviewAndDebug: "10 mins: Bug hunt discussion and testing transition triggers.",
        packDownAndDismissal: "5 mins: Project saving and lab sign-out."
      },
      commonTraps: [
        "Mismatched message names ('start' vs 'Start Game').",
        "Sprites never hidden on Green Flag, so they appear on top of the Title Screen.",
        "Broadcasting inside a 'forever' loop without waiting, sending 60 broadcasts per second."
      ],
      differentiationTips: "Encourage pupils to write down their broadcast names on a scrap of paper so they never misspell them across different sprites."
    }
  },
  {
    week: 7,
    title: "Flappy Parrot: Gravity & Obstacles",
    tagline: "Build a physics-based jumping game with scrolling obstacles!",
    badge: {
      name: "Physics Pioneer",
      icon: "🦜",
      description: "Mastered gravity simulation, velocity variables, and obstacle cloning!"
    },
    csConcept: "Physics Simulation (Velocity & Gravity)",
    bigIdea: "How do video game characters jump? Real gravity constantly pulls things down faster and faster. In code, we simulate gravity with a velocity variable that decreases every frame!",
    equipmentNeeds: "Scratch editor with keyboard spacebar.",
    steps: [
      {
        id: 1,
        title: "Create the Parrot & Gravity Variable",
        actionText: "Choose the 'Parrot' sprite and make a new variable named 'Velocity'. Set Velocity to 0 on green flag.",
        tip: "Velocity means speed in a certain direction!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (-120) y: (50)"
          },
          {
            category: "variables",
            shape: "stack",
            text: "set [Velocity v] to (0)"
          }
        ],
        spotCheck: "Does your parrot spawn safely in the mid-left of the stage?"
      },
      {
        id: 2,
        title: "Simulate Constant Falling Gravity",
        actionText: "Inside a forever loop, decrease Velocity by 1, and change the Parrot's Y position by Velocity.",
        tip: "As Velocity drops to -1, -2, -3, the parrot falls faster and faster!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "forever",
            nestedBlocks: [
              {
                category: "variables",
                shape: "stack",
                text: "change [Velocity v] by (-1)"
              },
              {
                category: "motion",
                shape: "stack",
                text: "change y by (Velocity)"
              }
            ]
          }
        ],
        spotCheck: "Click Green Flag. Does the parrot fall naturally like real gravity is pulling it down?"
      },
      {
        id: 3,
        title: "Flap Wings on Spacebar Press",
        actionText: "When the Space key is pressed, set Velocity to positive 10 and switch to the flapping costume!",
        tip: "Setting Velocity to +10 shoots the parrot upwards into the air for a flap!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [space v] key pressed"
          },
          {
            category: "variables",
            shape: "stack",
            text: "set [Velocity v] to (10)"
          },
          {
            category: "looks",
            shape: "stack",
            text: "next costume"
          },
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Bird v]"
          }
        ],
        spotCheck: "Tap Space bar repeatedly. Can you keep the parrot floating gracefully in the air?"
      },
      {
        id: 4,
        title: "Create Scrolling Pipe / Tree Obstacles",
        actionText: "Paint a tall Pipe or Pillar sprite. Make it start at the far right (x: 240) and glide smoothly all the way to the left (x: -240).",
        tip: "When it reaches -240, respawn it at +240 at a random Y height so the gap moves!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "forever",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "go to x: (240) y: (pick random (-60) to (60))"
              },
              {
                category: "motion",
                shape: "stack",
                text: "glide (3) secs to x: (-240) y: (y position)"
              }
            ]
          }
        ],
        spotCheck: "Do obstacle pillars slide continuously across the screen from right to left?"
      },
      {
        id: 5,
        title: "Crash Detection & Score Tracker",
        actionText: "If the parrot touches an obstacle pipe or hits the ground (y < -160), crash with an explosion sound and trigger Game Over!",
        tip: "Every time the pipe reaches x: -240 without a crash, give the player +1 score!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <<touching [Pipe v]?> or <(y position) < [-160]>> then",
            nestedBlocks: [
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Crash v]"
              },
              {
                category: "control",
                shape: "cap",
                text: "stop [all v]"
              }
            ]
          }
        ],
        spotCheck: "Fly through 3 pipes. Does your score increase for each dodge, and end if you clip a pipe?"
      }
    ],
    bugHunt: {
      title: "The Rocketing Skyward Parrot",
      scenario: "Chloe tapped Space once, but her parrot zoomed straight into outer space and never came back down!",
      buggyCode: [
        {
          category: "control",
          shape: "c-block",
          text: "forever",
          nestedBlocks: [
            {
              category: "variables",
              shape: "stack",
              text: "change [Velocity v] by (1)"
            },
            {
              category: "motion",
              shape: "stack",
              text: "change y by (Velocity)"
            }
          ]
        }
      ],
      clue: "Gravity pulls DOWNwards. Should gravity be positive or negative?",
      solutionExplanation: "Change 'change Velocity by 1' to 'change Velocity by -1' so gravity pulls the sprite downwards.",
      fixedCode: [
        {
          category: "control",
          shape: "c-block",
          text: "forever",
          nestedBlocks: [
            {
              category: "variables",
              shape: "stack",
              text: "change [Velocity v] by (-1)"
            },
            {
              category: "motion",
              shape: "stack",
              text: "change y by (Velocity)"
            }
          ]
        }
      ]
    },
    spicyChallenge: {
      title: "Moving Cloud Parallax",
      rewardStars: 5,
      description: "Add background clouds that scroll slowly at speed -1 while trees scroll at speed -5 to create a 3D depth parallax effect!",
      hint: "Use clones of a cloud sprite moving at different X speeds!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Understand computer simulations; create computer games involving motion and physical forces.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Drop an eraser vs paper demo to discuss gravity and velocity.",
        liveDemo: "10 mins: Live demo of the velocity loop and tapping spacebar.",
        handsOnCoding: "30 mins: Pupils build the Flappy Parrot game mechanics.",
        peerReviewAndDebug: "10 mins: Bug hunt discussion and partner playtesting.",
        packDownAndDismissal: "5 mins: Project saving and lab tidy-up."
      },
      commonTraps: [
        "Confusing 'change velocity by -1' with 'set velocity to -1'.",
        "Pipe collision hitbox is too punishing; advise students to keep the gap between pipes wide."
      ],
      differentiationTips: "If the game is too hard to play, slow down the glide speed of the pipes from 2 seconds to 4 seconds to give pupils more reaction time."
    }
  },
  {
    week: 8,
    title: "Game Design Studio: Decomposition",
    tagline: "Break down big game ideas into bite-sized code modules like pro game devs!",
    badge: {
      name: "Master Architect",
      icon: "📐",
      description: "Mastered problem decomposition, storyboard planning, and game design architecture!"
    },
    csConcept: "Problem Decomposition & Planning",
    bigIdea: "Decomposition means breaking a big scary problem down into small, friendly pieces! Instead of trying to build 'A Whole Game', we build: 1) Player movement, 2) Goal, 3) Hazard, 4) Score.",
    equipmentNeeds: "Scratch editor, paper/storyboard planning sheet.",
    steps: [
      {
        id: 1,
        title: "Pick Your Game Genre",
        actionText: "Choose one game formula you love: 1) Maze Adventure, 2) Catcher Game, 3) Side-scrolling Jumper, or 4) Target Clicker.",
        tip: "Sticking to a genre you've practiced ensures you can finish and polish it in time!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "say [Welcome to My Custom Game!] for (2) secs"
          }
        ],
        spotCheck: "Have you written down your genre and hero character name on your planning sheet?"
      },
      {
        id: 2,
        title: "Decompose Component 1: The Player Hero",
        actionText: "Choose or paint your hero character. Code their movement mechanics (arrows or mouse) and their starting spawn coordinates.",
        tip: "Always make sure the hero resets position when the green flag is clicked!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (0) y: (-120)"
          }
        ],
        spotCheck: "Can you steer your hero smoothly across your custom arena?"
      },
      {
        id: 3,
        title: "Decompose Component 2: The Goal / Collectibles",
        actionText: "Add coins, gems, or friendly creatures to collect. Add a Score variable that increments when collected.",
        tip: "Make collectibles play a joyful chime sound when gathered!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <touching [Hero v]?> then",
            nestedBlocks: [
              {
                category: "variables",
                shape: "stack",
                text: "change [Coins v] by (1)"
              },
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Magic Spell v]"
              },
              {
                category: "looks",
                shape: "stack",
                text: "hide"
              }
            ]
          }
        ],
        spotCheck: "Do collectibles vanish and add points when your hero touches them?"
      },
      {
        id: 4,
        title: "Decompose Component 3: The Danger / Hazard",
        actionText: "Add 1 enemy or obstacle (e.g. lava pits, spikes, or patrol monsters) that subtracts a life or resets the player.",
        tip: "Keep enemies fair: give the player enough room to dodge them!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <touching [Hazard v]?> then",
            nestedBlocks: [
              {
                category: "variables",
                shape: "stack",
                text: "change [Lives v] by (-1)"
              },
              {
                category: "motion",
                shape: "stack",
                text: "go to x: (0) y: (-120)"
              }
            ]
          }
        ],
        spotCheck: "Does touching the hazard safely penalize the player and reset position?"
      },
      {
        id: 5,
        title: "Decompose Component 4: Win & Lose Conditions",
        actionText: "Add win condition (reach 10 coins) and lose condition (lives reach 0) using broadcasts.",
        tip: "Test both conditions yourself to make sure both can happen!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <(Coins) > [9]> then",
            nestedBlocks: [
              {
                category: "events",
                shape: "stack",
                text: "broadcast [Victory v]"
              }
            ]
          }
        ],
        spotCheck: "Can you win the game? Can you lose the game? Both states working?"
      }
    ],
    bugHunt: {
      title: "The Ghost Collectible Bug",
      scenario: "Jack coded 5 coins to hide when collected. When he restarted the game with the Green Flag, all the coins were permanently invisible!",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [green flag] clicked"
        },
        {
          category: "control",
          shape: "c-block",
          text: "if <touching [Hero v]?> then",
          nestedBlocks: [
            {
              category: "looks",
              shape: "stack",
              text: "hide"
            }
          ]
        }
      ],
      clue: "If a sprite hides during gameplay, what MUST you tell it to do on Green Flag startup?",
      solutionExplanation: "Add a purple 'show' block immediately under 'when green flag clicked' so the coin reappears when the game restarts!",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [green flag] clicked"
        },
        {
          category: "looks",
          shape: "stack",
          text: "show"
        }
      ]
    },
    spicyChallenge: {
      title: "Secret Easter Egg Portal",
      rewardStars: 5,
      description: "Hide a secret invisible area on the stage. If the hero stands on it and presses the 'E' key, transport them to a secret gold-filled bonus room!",
      hint: "Use 'if <key [e v] pressed? and touching [SecretZone v]> then switch backdrop to [BonusRoom v]'!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Decompose complex problems into smaller parts; design modular software projects.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Paper storyboard planning and feature selection.",
        liveDemo: "10 mins: Decomposition breakdown on board (Player, Collectible, Hazard, HUD).",
        handsOnCoding: "30 mins: Pupils assemble their personalized game project.",
        peerReviewAndDebug: "10 mins: Quick pair check: is the game beatable?",
        packDownAndDismissal: "5 mins: Save project with custom title."
      },
      commonTraps: [
        "Pupils trying to make games that are too huge (e.g. 50 levels of 3D open world). Guide them to focus on 1 great complete level first.",
        "Forgetting to 'show' sprites on Green Flag after they hide."
      ],
      differentiationTips: "Encourage ambitious pupils to add sound effects and custom animations. Ensure slower coders stick to modifying one of the starter templates from Weeks 2–5."
    }
  },
  {
    week: 9,
    title: "Bug Busters & Playtesting Lab",
    tagline: "Test, polish, and debug your games using professional QA methods!",
    badge: {
      name: "Bug Buster",
      icon: "🔍",
      description: "Mastered systematic software testing, debugging, and peer feedback cycles!"
    },
    csConcept: "Systematic Testing & Debugging",
    bigIdea: "All software has bugs! Professional game developers spend half their time testing, finding glitches, and polishing controls. Today, you are the Lead QA Game Tester!",
    equipmentNeeds: "Scratch editor with custom game from Week 8.",
    steps: [
      {
        id: 1,
        title: "The Reset Stress-Test",
        actionText: "Play your game, let yourself lose, then immediately hit the Green Flag. Does everything reset properly without needing to reload the webpage?",
        tip: "Check: Scores reset to 0? Lives reset to 3? Hero teleports to start? Backdrops reset to Title Menu?",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "clear graphic effects"
          }
        ],
        spotCheck: "Can you play 3 games back-to-back without any glitches or stuck sprites?"
      },
      {
        id: 2,
        title: "Peer Playtest: '2 Stars and a Wish'",
        actionText: "Swap seats with a friend! Let your friend play your game without giving them any verbal hints. Watch where they get stuck.",
        tip: "Write down 2 things they loved (Stars ⭐⭐) and 1 thing they wish was improved (Wish 💭)!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "say [How to play: Use Arrow Keys!] for (3) secs"
          }
        ],
        spotCheck: "Did your playtester know how to control the character without asking for help?"
      },
      {
        id: 3,
        title: "Add On-Screen Instructions",
        actionText: "Add clear visual instructions so anyone in the world can play your game immediately.",
        tip: "A friendly tutorial sprite that speaks for 3 seconds or a 'How to Play' button works great!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "say [Dodge the Spikes! Collect 10 Gems to Win!] for (3) secs"
          }
        ],
        spotCheck: "Does the game tell the player what the goal is right at the start?"
      },
      {
        id: 4,
        title: "Audio & Visual Polish",
        actionText: "Add juice to your game! Add a background music loop, sound effects for jumping, collecting, and crashing, and particle effects.",
        tip: "Keep background music volume at 30% so sound effects are still punchy and clear!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "set volume to (30) %"
          },
          {
            category: "sound",
            shape: "stack",
            text: "play sound [Bossa Nova v] until done"
          }
        ],
        spotCheck: "Does your game sound alive and engaging when you play?"
      },
      {
        id: 5,
        title: "Difficulty Balancing",
        actionText: "Make sure your game isn't impossibly hard or boringly easy. Adjust enemy speeds or hitbox sizes so it feels just right.",
        tip: "If a player dies in the first 2 seconds, slow down the hazard!",
        blocks: [
          {
            category: "motion",
            shape: "stack",
            text: "change x by (-4)"
          }
        ],
        spotCheck: "Can an average player beat the first challenge on their 2nd or 3rd try?"
      }
    ],
    bugHunt: {
      title: "The Ear-Splitting Audio Glitch",
      scenario: "Harry added a laser sound effect inside his main forever loop, but when the game ran, it played 1,000 times a second creating a loud buzz!",
      buggyCode: [
        {
          category: "control",
          shape: "c-block",
          text: "forever",
          nestedBlocks: [
            {
              category: "sound",
              shape: "stack",
              text: "start sound [Laser v]"
            }
          ]
        }
      ],
      clue: "The forever loop repeats with zero delay! How do we make the sound play only when a specific action happens?",
      solutionExplanation: "Wrap the sound block inside an 'if' block (e.g. 'if key space pressed then start sound Laser') so it only triggers when fired!",
      fixedCode: [
        {
          category: "control",
          shape: "c-block",
          text: "if <key [space v] pressed?> then",
          nestedBlocks: [
            {
              category: "sound",
              shape: "stack",
              text: "start sound [Laser v]"
            },
            {
              category: "control",
              shape: "stack",
              text: "wait (0.2) seconds"
            }
          ]
        }
      ]
    },
    spicyChallenge: {
      title: "Celebration Screen Confetti",
      rewardStars: 5,
      description: "When the player wins, create 20 colourful clone sprites that explode outwards from the centre like fireworks!",
      hint: "Use 'repeat (20) create clone of myself' and 'when I start as a clone point in random direction move 10 steps'!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Detect and correct errors in algorithms and programs; evaluate work critically.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Discussion on real world game bugs and why playtesting matters.",
        liveDemo: "10 mins: How to do '2 Stars and a Wish' constructive peer feedback.",
        handsOnCoding: "30 mins: Peer testing round + bug fixing and audio balancing.",
        peerReviewAndDebug: "10 mins: Group bug hunt puzzle review.",
        packDownAndDismissal: "5 mins: Save final project versions ready for next week's showcase."
      },
      commonTraps: [
        "Pupils taking critical feedback personally. Emphasize that finding bugs is a badge of honor for game testers!",
        "Audio played without limits causing browser tab slowdown."
      ],
      differentiationTips: "Pair up more confident coders with pupils who need help with debugging so they can solve code puzzles together."
    }
  },
  {
    week: 10,
    title: "Arcade Showcase & Graduation",
    tagline: "Present your finished game, celebrate your coding achievements, and graduate!",
    badge: {
      name: "Arcade Legend",
      icon: "👑",
      description: "Graduated the KS2 Starter Curriculum and published a complete video game!"
    },
    csConcept: "Digital Citizenship & Evaluation",
    bigIdea: "You are now a certified game programmer! Programmers share their creations responsibly, credit others for ideas, and celebrate how much they've learned.",
    equipmentNeeds: "Scratch editor, certificates ready for printing, projector for showcase.",
    steps: [
      {
        id: 1,
        title: "Final Name & Credits Check",
        actionText: "Give your Scratch project an awesome title (e.g. 'Galactic Asteroid Escape by Maya'). In the Project Notes & Credits, write how to play and thank any friends who helped test it.",
        tip: "Do not put your full surname, address, or phone number in online notes—keep it safe!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "say [Created by a KS2 Coding Club Champion!] for (2) secs"
          }
        ],
        spotCheck: "Does your project have an exciting title and clear instructions in the notes box?"
      },
      {
        id: 2,
        title: "Set Up the Arcade Floor",
        actionText: "Switch your game into Full Screen mode (click the blue expand button in the top-right of Scratch). Leave your game ready on the Title Screen.",
        tip: "Adjust computer headphones so your showcase visitors can hear your awesome sound effects!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [StartMenu v]"
          }
        ],
        spotCheck: "Is your game in full-screen mode looking like a real arcade machine?"
      },
      {
        id: 3,
        title: "The Great Arcade Walkabout",
        actionText: "Spend 15 minutes walking around the computer suite playing games built by your fellow coders! Vote on the most creative, funniest, and hardest games.",
        tip: "Always leave positive comments and congratulate your peers on their hard work!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Cheer v]"
          }
        ],
        spotCheck: "Have you played at least 3 other games and congratulated their creators?"
      },
      {
        id: 4,
        title: "Future Coding Horizons",
        actionText: "Explore what's next! You now know the core rules of all programming. You can next code BBC micro:bit robots, build Python scripts, or design 3D worlds!",
        tip: "Everything you learned about loops, variables, and conditionals is used by software engineers at Google, NASA, and Nintendo!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [I become a programmer v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "think [The possibilities are endless!] for (2) secs"
          }
        ],
        spotCheck: "Do you know what coding project you want to build next?"
      },
      {
        id: 5,
        title: "Graduation & Certificate Presentation",
        actionText: "Open the Certificate generator in this app, enter your name, and receive your official Key Stage 2 Coding Club Certificate of Achievement!",
        tip: "Print your certificate to take home and hang on your bedroom wall or show your school headteacher!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "play sound [Fanfare v] until done"
          }
        ],
        spotCheck: "Did you generate and print your graduation certificate with all 10 badges unlocked?"
      }
    ],
    bugHunt: {
      title: "The Unnamed Masterpiece",
      scenario: "Alex built an incredible 5-level adventure game, but saved it as 'Untitled-12' and closed the browser without sharing or recording the project link!",
      buggyCode: [
        {
          category: "looks",
          shape: "stack",
          text: "say [Untitled-12] for (2) secs"
        }
      ],
      clue: "How do we make sure our project is saved in Scratch and easy to find?",
      solutionExplanation: "Always give your project a clear, descriptive name in the top bar and click 'File -> Save Now' before closing!",
      fixedCode: [
        {
          category: "looks",
          shape: "stack",
          text: "say [Galactic Quest 2026 - By Alex] for (2) secs"
        }
      ]
    },
    spicyChallenge: {
      title: "High-Score Cloud Leaderboard",
      rewardStars: 5,
      description: "Use Scratch Cloud Variables (for Scratchers with confirmed accounts) to save a global high score that persists across different computers!",
      hint: "Check the 'Cloud variable (stored on server)' checkbox when making the HighScore variable!"
    },
    teacherGuide: {
      curriculumLink: "KS2 Computing: Be discerning in evaluating digital content; select, use and combine a variety of software to design and create a range of programs; understand digital identity and safety.",
      lessonTiming: {
        arrivalAndWarmup: "5 mins: Set up computer lab in 'Arcade Mode' (full screen on every monitor).",
        liveDemo: "5 mins: Welcome parents/headteacher if attending; explain the showcase format.",
        handsOnCoding: "25 mins: Pupils and visitors play each other's games; voting tokens.",
        peerReviewAndDebug: "15 mins: Presentation of official Coding Club Certificates & applause.",
        packDownAndDismissal: "10 mins: Photo opportunity (subject to GDPR consent); final pack down."
      },
      commonTraps: [
        "Certificates with misspelled pupil names—pre-verify names using the club register.",
        "School network printers running out of paper or ink—test print 1 sample certificate before session starts."
      ],
      differentiationTips: "Ensure every single child receives enthusiastic praise for their specific creative milestone (whether it's their animation, sound design, or code complexity)."
    }
  }
];
