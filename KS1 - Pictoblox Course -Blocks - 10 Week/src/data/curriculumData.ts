import { KS1Lesson } from '../types';

export const ks1CurriculumData: KS1Lesson[] = [
  {
    week: 1,
    title: "Meet Tobi the Bear!",
    themeTagline: "Wake up your new furry friend and teach him to speak!",
    badge: {
      name: "Tobi's Best Friend",
      icon: "🐻",
      description: "Learned how to wake up Tobi with the Magic Green Flag!"
    },
    tobiMood: "Happy Waving Tobi",
    tobiEmoji: "👋🐻",
    bigIdeaForKids: "A computer program is like a magical recipe! When you click the Green Flag, the computer follows your steps one by one.",
    bigIdeaNarration: "Welcome to Coding Master! A computer program is like a magical recipe. When you click the Green Flag, Tobi the Bear wakes up and follows your steps one by one!",
    steps: [
      {
        id: 1,
        title: "Meet Tobi on Stage",
        narration: "Open PictoBlox. Look at the stage on the right. Say hello to Tobi the friendly bear!",
        actionText: "Open PictoBlox. Find Tobi the Bear standing in the middle of your stage. He is waiting for you to code him!",
        funTip: "Tobi loves coding and eating honey!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "switch costume to [tobi_happy v]"
          }
        ],
        spotCheck: "👀 Look: Do you see Tobi smiling on your screen?"
      },
      {
        id: 2,
        title: "Add the Magic Green Flag Hat",
        narration: "Click the yellow Events circle on the left. Drag the when green flag clicked block into your coding area.",
        actionText: "Click the yellow 'Events' circle on the left. Drag the 'when green flag clicked' block onto your big script area.",
        funTip: "The Green Flag is like pressing 'GO' on a toy car!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          }
        ],
        spotCheck: "👀 Look: Does your block have a little green flag on it?"
      },
      {
        id: 3,
        title: "Make Tobi Say Hello!",
        narration: "Click the purple Looks circle. Snap the say Hello block right underneath the yellow green flag block.",
        actionText: "Click the purple 'Looks' circle. Snap 'say [Hello!] for (2) seconds' right underneath the yellow flag block until they click together like Lego!",
        funTip: "Listen for the gentle snap when blocks connect!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "say [Hello! I'm Tobi!] for (2) seconds"
          }
        ],
        spotCheck: "👀 Test it: Click the Green Flag above the stage. Does a speech bubble pop up over Tobi?"
      },
      {
        id: 4,
        title: "Add a Happy Cheer Sound!",
        narration: "Click the pink Sound circle. Snap play sound Cheer right under the speech block. Now press the Green Flag to celebrate!",
        actionText: "Click the pink 'Sound' circle. Snap 'start sound [Cheer v]' under Tobi's speech. Now click the Green Flag to hear Tobi celebrate!",
        funTip: "Turn your computer speakers up so you can hear Tobi's cheerful voice!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "looks",
            shape: "stack",
            text: "say [Hello! I'm Tobi!] for (2) seconds"
          },
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Cheer v]"
          }
        ],
        spotCheck: "👀 Test it: Did Tobi talk and cheer at the same time?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Sleeping Bear",
      story: "Little Lily clicked the Green Flag, but Tobi didn't say anything at all! Look closely at her blocks below. Why is Tobi still asleep?",
      narration: "Oopsie Detective time! Little Lily clicked the Green Flag, but Tobi didn't say anything. Can you spot why Tobi is still asleep?",
      buggyCode: [
        {
          category: "looks",
          shape: "stack",
          text: "say [Hello! I'm Tobi!] for (2) seconds"
        }
      ],
      clue: "Look at the top of the purple block. Is there a magic yellow hat to tell the computer WHEN to start?",
      howToFix: "Every recipe needs a starting step! Snap the yellow 'when green flag clicked' hat block on top of the purple block.",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [green flag] clicked"
        },
        {
          category: "looks",
          shape: "stack",
          text: "say [Hello! I'm Tobi!] for (2) seconds"
        }
      ]
    },
    superStar: {
      title: "Super Star: Pick a Fun Backdrop!",
      stars: 3,
      description: "Click the little picture icon in the bottom-right corner and choose a magical background like 'Forest', 'Castle', or 'Space' for Tobi!",
      easyHint: "The backdrop button looks like a sunny hill with a tiny plus sign."
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Understand what algorithms are; understand that programs execute by following precise and unambiguous instructions.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Gather pupils, introduce Tobi the Bear, and discuss how computers need friendly instructions.",
        tobiStoryAndDemo: "10 mins: Live demo on projector: show how blocks snap together like puzzle pieces.",
        handsOnCodingFun: "20 mins: Children open PictoBlox, drag their first 3 blocks, and test the Green Flag.",
        showAndTellCelebration: "5 mins: Classmates tap their neighbors' green flags to hear Tobi cheer.",
        tidyAndStickers: "5 mins: Tidy mouse pads and award the 'Tobi's Best Friend' badge."
      },
      mouseAndKeyboardTips: "Model how to 'click and hold' the left mouse button to drag blocks. For tablet users, show a gentle tap-and-slide.",
      littleMistakesToWatch: [
        "Blocks dropped nearby but not snapped together (no click sound).",
        "Clicking the red stop sign instead of the green flag.",
        "Computer volume muted."
      ],
      encouragementWords: "Say: 'You just wrote your very first computer code! You are officially a Coding Master!'"
    }
  },
  {
    week: 2,
    title: "Tobi's Jungle Dance Party",
    themeTagline: "Tap Tobi to make him flash rainbow colours and dance to drums!",
    badge: {
      name: "Dance Champ",
      icon: "🎉",
      description: "Created a magical tap-to-dance interactive animation!"
    },
    tobiMood: "Dancing Rainbow Tobi",
    tobiEmoji: "🕺🐻",
    bigIdeaForKids: "An 'Event' is when something special happens—like tapping a screen! When you click Tobi, he dances instantly!",
    bigIdeaNarration: "An Event is when something exciting happens! When your finger or mouse taps Tobi, he knows it's time to dance and shine like a rainbow!",
    steps: [
      {
        id: 1,
        title: "The Magic Touch Hat",
        narration: "From the yellow Events group, drag the when this sprite clicked block. Now Tobi will listen for your mouse clicks!",
        actionText: "Open the yellow 'Events' category. Find the block called 'when this sprite clicked' and drag it onto your screen.",
        funTip: "A 'Sprite' is what computer scientists call any character on screen!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when this sprite clicked"
          }
        ],
        spotCheck: "👀 Look: Does your block say 'when this sprite clicked'?"
      },
      {
        id: 2,
        title: "Rainbow Colour Magic",
        narration: "Click the purple Looks circle. Snap change color effect by 25 under your click block. Watch Tobi change shades!",
        actionText: "Click the purple 'Looks' circle. Snap 'change [color v] effect by (25)' directly under the click block.",
        funTip: "Every time you click, Tobi will turn blue, purple, pink, and green!",
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
        spotCheck: "👀 Test it: Click Tobi 3 times with your mouse. Does his fur change to amazing new colours?"
      },
      {
        id: 3,
        title: "Growing and Shrinking Fun",
        narration: "Let's make Tobi bounce bigger and smaller! Add change size by 10, then wait a tiny second, and change size by minus 10.",
        actionText: "Add 'change size by (20)', then add a tiny 'wait (0.2) seconds' from Control (orange), and finish with 'change size by (-20)' from Looks.",
        funTip: "This makes Tobi pop out at you like a pop-up book!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "change size by (20)"
          },
          {
            category: "control",
            shape: "stack",
            text: "wait (0.2) seconds"
          },
          {
            category: "looks",
            shape: "stack",
            text: "change size by (-20)"
          }
        ],
        spotCheck: "👀 Test it: Click Tobi. Does he bounce big and pop right back?"
      },
      {
        id: 4,
        title: "Jungle Dance Beats",
        narration: "Go to the pink Sound circle and add play sound Dance Magic. Now you have a full party every time you tap!",
        actionText: "Go to the pink 'Sound' circle. Snap 'start sound [Dance Magic v]' at the top of your click recipe.",
        funTip: "You can click on the sound dropdown to try different funny beats!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Dance Magic v]"
          }
        ],
        spotCheck: "👀 Test it: Click Tobi rapidly! Does he change colours and play dance beats?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Giant Balloon Tobi",
      story: "Sam clicked Tobi 10 times, but Tobi grew so huge he filled the entire screen and wouldn't shrink back!",
      narration: "Oopsie Detective! Sam clicked Tobi, but Tobi grew bigger and bigger until he filled the whole screen! How do we make Tobi shrink back?",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when this sprite clicked"
        },
        {
          category: "looks",
          shape: "stack",
          text: "change size by (20)"
        }
      ],
      clue: "If you change size by positive 20, you need another block with a minus sign to shrink back!",
      howToFix: "Add a 'wait 0.2 seconds' and 'change size by -20' so Tobi bounces back to normal size.",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when this sprite clicked"
        },
        {
          category: "looks",
          shape: "stack",
          text: "change size by (20)"
        },
        {
          category: "control",
          shape: "stack",
          text: "wait (0.2) seconds"
        },
        {
          category: "looks",
          shape: "stack",
          text: "change size by (-20)"
        }
      ]
    },
    superStar: {
      title: "Super Star: Reset Button!",
      stars: 3,
      description: "Under a Green Flag block, add 'clear graphic effects' and 'set size to 100%' so Tobi always resets clean when you start a new game!",
      easyHint: "Look in the purple Looks category for 'clear graphic effects'."
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Create and debug simple programs; use technology purposefully to create digital content.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Tap-tap game. Tap desk = clap hands. Introduce events.",
        tobiStoryAndDemo: "10 mins: Demonstrate 'when this sprite clicked' and the color effect slider.",
        handsOnCodingFun: "20 mins: Children code their tap-to-dance Tobi.",
        showAndTellCelebration: "5 mins: DJ Party time! Everyone taps their characters to make music.",
        tidyAndStickers: "5 mins: Save work and award the Dance Champ badge."
      },
      mouseAndKeyboardTips: "Demonstrate clicking directly on Tobi on the stage rather than in the code area.",
      littleMistakesToWatch: [
        "Confusing 'set size to' with 'change size by'.",
        "Forgetting the minus sign (-) on -20.",
        "Pupils clicking so fast they open sprite properties."
      ],
      encouragementWords: "Tell pupils: 'Look at the magical animation you made! You are a digital artist!'"
    }
  },
  {
    week: 3,
    title: "Walking Tobi: Stepping Stones",
    themeTagline: "Use keyboard arrows to walk Tobi across the magical stepping stones!",
    badge: {
      name: "Pathfinder",
      icon: "🐾",
      description: "Mastered directional arrow keys and walking leg animations!"
    },
    tobiMood: "Walking Adventurer Tobi",
    tobiEmoji: "🚶🐻",
    bigIdeaForKids: "Direction means where you are heading! Right is towards the window, left is towards the door. We use arrow keys to steer Tobi!",
    bigIdeaNarration: "Direction means where you are heading! When you press the Right Arrow key, Tobi turns right and takes a step across the stepping stones!",
    steps: [
      {
        id: 1,
        title: "Starting on the Left Stone",
        narration: "When the Green Flag is clicked, let's put Tobi on the far left side of the stage ready to begin his walk.",
        actionText: "Drag 'when green flag clicked'. From Motion (blue), snap 'point in direction (90)' and 'go to x: (-160) y: (-80)'.",
        funTip: "This makes sure Tobi starts at the beginning every time!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "point in direction (90)"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (-160) y: (-80)"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi jump to the left side of your screen?"
      },
      {
        id: 2,
        title: "Press Right Arrow to Walk!",
        narration: "From Events, drag when space key pressed. Click the little arrow and change space to right arrow.",
        actionText: "From yellow Events, drag 'when [space v] key pressed'. Click the dropdown and choose 'right arrow'.",
        funTip: "Look at your computer keyboard. Can you find the four arrow keys on the bottom right?",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [right arrow v] key pressed"
          }
        ],
        spotCheck: "👀 Look: Does your block say 'when [right arrow] key pressed'?"
      },
      {
        id: 3,
        title: "Take a Step Forward",
        narration: "From the blue Motion circle, snap move 15 steps under your right arrow block. Now tap the right arrow key!",
        actionText: "From blue 'Motion', snap 'point in direction (90)' and 'move (15) steps' under the right arrow block.",
        funTip: "Each step moves Tobi across the stage like real walking!",
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
            text: "move (15) steps"
          }
        ],
        spotCheck: "👀 Test it: Tap your Right Arrow key. Does Tobi march forward across the screen?"
      },
      {
        id: 4,
        title: "Animate Tobi's Walking Legs!",
        narration: "From Looks, snap next costume under move steps. Now whenever Tobi steps, his legs move like he is really walking!",
        actionText: "From purple 'Looks', snap 'next costume' right after 'move (15) steps'.",
        funTip: "Tobi has different drawings called costumes. Switching them makes a cartoon movie!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "next costume"
          }
        ],
        spotCheck: "👀 Test it: Tap Right Arrow multiple times. Does Tobi swing his paws and walk like a real bear?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Moonwalking Bear",
      story: "Noah pressed the Right Arrow key, but Tobi glided across the screen like a frozen statue without moving his legs at all!",
      narration: "Oopsie Detective! Noah pressed the right arrow, but Tobi slid across the screen like a frozen statue! What block is missing to make his legs move?",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [right arrow v] key pressed"
        },
        {
          category: "motion",
          shape: "stack",
          text: "move (15) steps"
        }
      ],
      clue: "To make a cartoon character move their arms and legs, you must switch to the next costume!",
      howToFix: "Snap the purple 'next costume' block under 'move (15) steps' to animate Tobi's legs.",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [right arrow v] key pressed"
        },
        {
          category: "motion",
          shape: "stack",
          text: "move (15) steps"
        },
        {
          category: "looks",
          shape: "stack",
          text: "next costume"
        }
      ]
    },
    superStar: {
      title: "Super Star: Walk Backwards (Left Arrow)!",
      stars: 4,
      description: "Can you create a matching script for the 'left arrow' key? Tip: Point in direction -90 and move 15 steps!",
      easyHint: "Make sure to set Tobi's rotation style to 'left-right' so he doesn't walk upside down!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Understand that programs execute by following precise instructions; use logical reasoning to predict program behavior.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Simon Says with 'Step Right', 'Step Left', 'Freeze!'.",
        tobiStoryAndDemo: "10 mins: Show pupils the arrow keys on the keyboard and what 'next costume' means.",
        handsOnCodingFun: "20 mins: Pupils code Tobi's right arrow walk across the screen.",
        showAndTellCelebration: "5 mins: Walking race! Who can walk Tobi safely to the other side?",
        tidyAndStickers: "5 mins: Save project and award the Pathfinder badge."
      },
      mouseAndKeyboardTips: "Put small colored stickers (green dot on Right Arrow) on computer keyboards to help KS1 pupils locate the arrow keys.",
      littleMistakesToWatch: [
        "Pupils holding the arrow key down continuously until Tobi walks off screen.",
        "Choosing 'up arrow' by accident instead of 'right arrow'.",
        "Confusing 'move 15 steps' with 'turn 15 degrees'."
      ],
      encouragementWords: "Say: 'Look at you controlling a video game character! You are a game programmer!'"
    }
  },
  {
    week: 4,
    title: "Animal Safari Orchestra",
    themeTagline: "Add wild jungle animals that roar, squeak, and trumpet when tapped!",
    badge: {
      name: "Safari Ranger",
      icon: "🦁",
      description: "Added multiple animal sprites and coded their authentic sounds!"
    },
    tobiMood: "Safari Explorer Tobi",
    tobiEmoji: "🤠🐻",
    bigIdeaForKids: "You can have more than one character on your stage! Each animal has its own brain and its own special code.",
    bigIdeaNarration: "You can have lots of friends on your stage! In Coding Master, every single animal has its own brain and its own code to roar and speak!",
    steps: [
      {
        id: 1,
        title: "Add a Jungle Backdrop",
        narration: "Click the picture icon in the bottom-right corner and pick the Jungle or Savannah background.",
        actionText: "Click 'Choose a Backdrop' in the bottom-right corner. Search for 'Jungle' or 'Savannah' and click it.",
        funTip: "Look at the big green trees and vines! Tobi loves the jungle!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [Jungle v]"
          }
        ],
        spotCheck: "👀 Look: Do you have a sunny jungle background on your stage?"
      },
      {
        id: 2,
        title: "Invite a Lion to the Safari",
        narration: "Click the blue bear icon to add a new character. Search for Lion and place him next to Tobi.",
        actionText: "Click the 'Choose a Sprite' button (the blue button next to the backdrop). Search for 'Lion' and click to add him to the stage.",
        funTip: "You can drag the Lion with your mouse to sit under the tree!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "set size to (80) %"
          }
        ],
        spotCheck: "👀 Look: Do you see both Tobi the Bear AND the Lion on your stage?"
      },
      {
        id: 3,
        title: "Code the Lion's Mighty Roar!",
        narration: "Click on the Lion. Add when this sprite clicked, play sound Roar, and say Roar for 2 seconds!",
        actionText: "Make sure the Lion is selected! Add 'when this sprite clicked', snap 'start sound [Roar v]', and snap 'say [ROAR! I am the Lion!] for (2) seconds'.",
        funTip: "Each animal needs its own code! Make sure you are coding the Lion, not Tobi!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when this sprite clicked"
          },
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Roar v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "say [ROAR! I am the Lion!] for (2) seconds"
          }
        ],
        spotCheck: "👀 Test it: Click on the Lion. Does he roar out loud and speak in a speech bubble?"
      },
      {
        id: 4,
        title: "Add a Cheeky Monkey Friend",
        narration: "Add another sprite: a Monkey! Code the monkey to play sound Chimp and do a happy little jump when clicked.",
        actionText: "Add a 'Monkey' sprite. Give the monkey: 'when this sprite clicked' -> 'start sound [Chimp v]' and 'say [Ooh ooh aah aah!] for (2) seconds'.",
        funTip: "Now you have an entire interactive jungle zoo!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when this sprite clicked"
          },
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Chimp v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "say [Ooh ooh aah aah!] for (2) seconds"
          }
        ],
        spotCheck: "👀 Test it: Can you click Tobi, click the Lion, and click the Monkey to hear all 3 sounds?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Roaring Bear",
      story: "Emma clicked on Tobi, but Tobi made a loud Lion ROAR! Why is Tobi roaring instead of the Lion?",
      narration: "Oopsie Detective! Emma clicked on Tobi, but Tobi made a loud Lion roar! How did the roar sound end up in Tobi's code?",
      buggyCode: [
        {
          category: "events",
          shape: "hat",
          text: "when this sprite clicked (on Tobi!)"
        },
        {
          category: "sound",
          shape: "stack",
          text: "start sound [Roar v]"
        }
      ],
      clue: "Check the little picture below the stage. Which sprite is highlighted in blue?",
      howToFix: "Always check which sprite you are coding! Click on the Lion sprite before adding animal sounds.",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when this sprite clicked (on Lion!)"
        },
        {
          category: "sound",
          shape: "stack",
          text: "start sound [Roar v]"
        }
      ]
    },
    superStar: {
      title: "Super Star: Add a Trumpeting Elephant!",
      stars: 4,
      description: "Add an Elephant sprite. Go to the Sounds tab, search for 'Elephant', and make the elephant trumpet when clicked!",
      easyHint: "Click the little speaker tab in the top-left to browse the giant library of animal sounds!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Use technology purposefully to create, organise, store, manipulate and retrieve digital content.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Guess that animal sound game (making elephant/monkey noises).",
        tobiStoryAndDemo: "10 mins: Demonstrate how each sprite has its own private coding workspace.",
        handsOnCodingFun: "20 mins: Children add animals, choose sounds, and test clicking them.",
        showAndTellCelebration: "5 mins: Jungle sound symphony! Everyone plays their sounds together.",
        tidyAndStickers: "5 mins: Save work and award Safari Ranger badge."
      },
      mouseAndKeyboardTips: "Show children how the sprite pane works at the bottom: click the animal to see its code.",
      littleMistakesToWatch: [
        "Pupils accidentally putting all code into Tobi because they forgot to click the new animal.",
        "Accidentally deleting a sprite (show the 'Edit -> Restore' menu if needed).",
        "Volume too loud across the computer lab."
      ],
      encouragementWords: "Tell pupils: 'You created a whole musical zoo! That's real software engineering!'"
    }
  },
  {
    week: 5,
    title: "Magic Disguises & Superhero Glide",
    themeTagline: "Dress Tobi in a superhero cape and watch him glide across the sky!",
    badge: {
      name: "Costume Magician",
      icon: "🦸",
      description: "Mastered costume switching, animation, and smooth gliding!"
    },
    tobiMood: "Superhero Flying Tobi",
    tobiEmoji: "🦸🐻",
    bigIdeaForKids: "'Glide' means smooth flying! Instead of teleporting in a blink, Tobi floats gently through the air like a superhero!",
    bigIdeaNarration: "Glide means smooth flying! Instead of jumping in a blink, Tobi floats gently through the clouds just like a superhero flying to save the day!",
    steps: [
      {
        id: 1,
        title: "Pick the Sky Clouds Backdrop",
        narration: "Choose a blue sky backdrop with fluffy clouds for Tobi's superhero flight.",
        actionText: "Click 'Choose a Backdrop' and pick 'Blue Sky' or 'Clouds'. Place Tobi down on the ground at the bottom-left.",
        funTip: "Superhero Tobi is getting ready for takeoff!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "switch backdrop to [Blue Sky v]"
          }
        ],
        spotCheck: "👀 Look: Do you have a sunny blue sky background on your stage?"
      },
      {
        id: 2,
        title: "Start on the Launchpad",
        narration: "When Green Flag is clicked, put Tobi at the bottom left with say I am Super Tobi!",
        actionText: "Under 'when green flag clicked', snap 'go to x: (-160) y: (-100)' and 'say [I am Super Tobi!] for (2) seconds'.",
        funTip: "This is Tobi's superhero launchpad!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (-160) y: (-100)"
          },
          {
            category: "looks",
            shape: "stack",
            text: "say [I am Super Tobi!] for (2) seconds"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi stand proudly on the ground and say his superhero name?"
      },
      {
        id: 3,
        title: "Fly Up High with Glide!",
        narration: "From Motion, snap glide 2 seconds to the top right of the sky. Watch Tobi fly like a bird!",
        actionText: "From blue 'Motion', snap 'glide (2) secs to x: (140) y: (100)' right after his speech.",
        funTip: "Glide makes characters float smoothly like magic!",
        blocks: [
          {
            category: "motion",
            shape: "stack",
            text: "glide (2) secs to x: (140) y: (100)"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi float gently up into the clouds?"
      },
      {
        id: 4,
        title: "Superhero Victory Speech",
        narration: "When Tobi lands in the clouds, make him say Mission Complete and play a magic sparkle sound!",
        actionText: "Snap 'say [Mission Complete! Up, up and away!] for (2) seconds' and 'start sound [Magic Spell v]'.",
        funTip: "Super Tobi saved the day!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Magic Spell v]"
          },
          {
            category: "looks",
            shape: "stack",
            text: "say [Mission Complete!] for (2) seconds"
          }
        ],
        spotCheck: "👀 Test it: Does Tobi fly up into the sky and celebrate when he reaches the top?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Instant Teleport",
      story: "Oliver wanted Tobi to glide slowly across the sky, but Tobi teleported to the top in a flash without any flying at all!",
      narration: "Oopsie Detective! Oliver wanted Tobi to glide, but Tobi instantly teleported like a lightning bolt! Which block did he use by mistake?",
      buggyCode: [
        {
          category: "motion",
          shape: "stack",
          text: "go to x: (140) y: (100)"
        }
      ],
      clue: "'Go to' teleports instantly. 'Glide' takes seconds to fly gently across the screen!",
      howToFix: "Replace the 'go to x: y:' block with the blue 'glide (2) secs to x: (140) y: (100)' block.",
      fixedCode: [
        {
          category: "motion",
          shape: "stack",
          text: "glide (2) secs to x: (140) y: (100)"
        }
      ]
    },
    superStar: {
      title: "Super Star: Draw a Superhero Cape!",
      stars: 4,
      description: "Click the 'Costumes' tab on Tobi, pick the paintbrush tool, and draw a bright red cape on Tobi's back!",
      easyHint: "Pick the red paint circle and draw a flowing triangle behind Tobi's shoulders!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Use logical reasoning to predict the behaviour of simple programs; create and debug simple programs.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Superhero pose warm-up! Discuss what flying means in cartoons.",
        tobiStoryAndDemo: "10 mins: Demonstrate the difference between 'go to' (instant) and 'glide' (smooth motion).",
        handsOnCodingFun: "20 mins: Children code Superhero Tobi's smooth takeoff and flight.",
        showAndTellCelebration: "5 mins: Countdown: 3, 2, 1, BLASTOFF! Pupils launch their flights together.",
        tidyAndStickers: "5 mins: Save project and award the Costume Magician badge."
      },
      mouseAndKeyboardTips: "Coordinate numbers (X and Y) can confuse young learners: explain that X: 140 Y: 100 simply means 'high up in the top right'.",
      littleMistakesToWatch: [
        "Pupils setting glide time to 0 seconds (which makes it instant).",
        "Tobi gliding off screen because coordinates were too high (keep X under 200, Y under 140)."
      ],
      encouragementWords: "Tell pupils: 'You just animated a superhero movie scene! Super job!'"
    }
  },
  {
    week: 6,
    title: "The Magic Loop: Round and Round!",
    themeTagline: "Learn the superpower of Loops to make Tobi spin and jump forever!",
    badge: {
      name: "Loop Wizard",
      icon: "🔄",
      description: "Mastered Repeat and Forever loops without writing extra code!"
    },
    tobiMood: "Spinning Dizzy Tobi",
    tobiEmoji: "💫🐻",
    bigIdeaForKids: "A Loop is a superpower that repeats actions for you! Instead of clicking 100 times, a loop does it automatically while you relax!",
    bigIdeaNarration: "A Loop is a coding superpower! Instead of snapping 100 blocks, a loop repeats your favourite action again and again automatically without getting tired!",
    steps: [
      {
        id: 1,
        title: "The Magic 'Repeat' Hugger",
        narration: "From the orange Control circle, find the repeat 10 block. It looks like an open crocodile mouth ready to hug your blocks!",
        actionText: "Click the orange 'Control' circle. Drag the 'repeat (10)' block onto your screen under 'when green flag clicked'.",
        funTip: "The C-block wraps around your blocks like a big warm hug!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "control",
            shape: "c-block",
            text: "repeat (10)"
          }
        ],
        spotCheck: "👀 Look: Does your block look like an open letter 'C' with the number 10?"
      },
      {
        id: 2,
        title: "Make Tobi Spin in Circles!",
        narration: "From Motion, drop turn 36 degrees inside the repeat mouth. Watch Tobi do a full 360 spin!",
        actionText: "From blue 'Motion', snap 'turn [clockwise] (36) degrees' INSIDE the mouth of the repeat block.",
        funTip: "Ten turns of 36 degrees makes a full happy cartwheel!",
        blocks: [
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
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi do a dizzy spinning cartwheel on the spot?"
      },
      {
        id: 3,
        title: "The Bouncing Kangaroo Jump",
        narration: "Let's make Tobi jump! Move up by 15, wait, then move down by 15. Put it in a repeat 5 loop!",
        actionText: "Under your spin, add 'repeat (5)' containing: 'change y by (20)', 'wait (0.1) seconds', and 'change y by (-20)'.",
        funTip: "Change Y by positive 20 jumps UP, minus 20 lands back DOWN!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "repeat (5)",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "change y by (20)"
              },
              {
                category: "control",
                shape: "stack",
                text: "wait (0.1) seconds"
              },
              {
                category: "motion",
                shape: "stack",
                text: "change y by (-20)"
              }
            ]
          }
        ],
        spotCheck: "👀 Test it: Does Tobi jump up and down 5 times like a bouncing kangaroo?"
      },
      {
        id: 4,
        title: "Add a Boing Sound to Every Jump!",
        narration: "Snap start sound Boing right inside your jump loop so Tobi makes a springy sound on every single bounce!",
        actionText: "Snap 'start sound [Boing v]' inside the jump repeat loop right before 'change y by (20)'.",
        funTip: "Boing! Boing! Boing! Five springy bounces in a row!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Boing v]"
          }
        ],
        spotCheck: "👀 Test it: Does Tobi play a funny boing sound every time he springs into the air?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Trapped Block",
      story: "Chloe wanted Tobi to spin 10 times and then say 'Whew! I am dizzy!'. But Tobi said 'Whew' on every single tiny turn!",
      narration: "Oopsie Detective! Chloe wanted Tobi to speak only AFTER spinning. But Tobi spoke on every single tiny turn! Where was the speech block placed by accident?",
      buggyCode: [
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
              category: "looks",
              shape: "stack",
              text: "say [Whew!] for (1) seconds"
            }
          ]
        }
      ],
      clue: "If a block is INSIDE the loop mouth, it repeats 10 times. To do it at the very end, place it OUTSIDE below the loop!",
      howToFix: "Drag the purple 'say [Whew!]' block OUTSIDE, right underneath the bottom bar of the repeat block.",
      fixedCode: [
        {
          category: "control",
          shape: "c-block",
          text: "repeat (10)",
          nestedBlocks: [
            {
              category: "motion",
              shape: "stack",
              text: "turn [clockwise] (36) degrees"
            }
          ]
        },
        {
          category: "looks",
          shape: "stack",
          text: "say [Whew! I am dizzy!] for (2) seconds"
        }
      ]
    },
    superStar: {
      title: "Super Star: The Forever Disco Glow!",
      stars: 4,
      description: "Use an orange 'forever' loop with 'change color effect by 10' so Tobi glows like a disco light forever until you press the red stop sign!",
      easyHint: "The 'forever' block never stops until you click the red circle above the stage!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Understand what algorithms are; use repetition (loops) in simple programs.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Physical warm-up: 'Jump 3 times!', 'Clap 4 times!'. Explain the loop concept.",
        tobiStoryAndDemo: "10 mins: Demonstrate the 'C-shaped' repeat block and show what goes inside vs outside.",
        handsOnCodingFun: "20 mins: Children code Tobi's spins and bouncing jumps.",
        showAndTellCelebration: "5 mins: Classmate dance-off: whose Tobi has the funniest jumps?",
        tidyAndStickers: "5 mins: Save project and award the Loop Wizard badge."
      },
      mouseAndKeyboardTips: "Dropping blocks INSIDE a C-block requires careful mouse hovering: show children the grey shadow slot that appears before releasing the mouse button.",
      littleMistakesToWatch: [
        "Blocks dropped underneath the C-block instead of inside its mouth.",
        "Putting 'wait 10 seconds' inside a loop which freezes the animation.",
        "Tobi ending tilted (add 'point in direction 90' to reset)."
      ],
      encouragementWords: "Tell pupils: 'Loops are the true secret of all computer coding! You are becoming real masters!'"
    }
  },
  {
    week: 7,
    title: "Talking Tobi: Speech Magic",
    themeTagline: "Use PictoBlox Artificial Intelligence to give Tobi a real human speaking voice!",
    badge: {
      name: "Voice Commander",
      icon: "🗣️",
      description: "Unlocked PictoBlox AI Text-to-Speech and coded custom voices!"
    },
    tobiMood: "Speaking Intelligent Tobi",
    tobiEmoji: "🎙️🐻",
    bigIdeaForKids: "Did you know computers can speak out loud? In PictoBlox, you type words and the computer turns them into a real speaking voice!",
    bigIdeaNarration: "Did you know computers can speak out loud with real voices? In PictoBlox, we use magical Artificial Intelligence so when you type words, Tobi talks out loud!",
    steps: [
      {
        id: 1,
        title: "Add the Magical Speech Extension",
        narration: "Look at the very bottom-left corner of PictoBlox. Click the purple button with a plus sign, and pick 'Text to Speech'!",
        actionText: "Click the purple 'Add Extension' button in the bottom-left corner of PictoBlox. Click on 'Text to Speech' (the speaking icon).",
        funTip: "Look! A brand new bright cyan category called 'Text to Speech' appears in your toolbox!",
        blocks: [
          {
            category: "speech",
            shape: "stack",
            text: "extension [Text to Speech added!]"
          }
        ],
        spotCheck: "👀 Look: Do you see the new green and blue speaking blocks in your block list?"
      },
      {
        id: 2,
        title: "Make Tobi Talk Out Loud!",
        narration: "Drag the speak block. Type in: Hello young Coding Masters! Welcome to class! Now click it to hear Tobi speak!",
        actionText: "Under 'when green flag clicked', snap 'speak [Hello young Coding Masters! Coding is super fun!]' from the Text to Speech category.",
        funTip: "Type whatever friendly words you want Tobi to say!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "speech",
            shape: "stack",
            text: "speak [Hello young Coding Masters! Coding is super fun!]"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Did Tobi speak out loud through your computer speakers?"
      },
      {
        id: 3,
        title: "Change to Funny Voices!",
        narration: "Snap set voice to giant or kitten above the speak block. Listen to how funny Tobi sounds!",
        actionText: "Snap 'set voice to [giant v]' above your speak block. Try 'kitten' for a high squeaky voice, or 'giant' for a deep rumble!",
        funTip: "Try the 'kitten' voice—it makes Tobi sound like a baby kitten talking!",
        blocks: [
          {
            category: "speech",
            shape: "stack",
            text: "set voice to [giant v]"
          },
          {
            category: "speech",
            shape: "stack",
            text: "speak [Fee fi fo fum! I am giant Tobi!]"
          }
        ],
        spotCheck: "👀 Test it: Did Tobi's voice change to a deep, funny giant voice?"
      },
      {
        id: 4,
        title: "Make Tobi Speak in Different Languages!",
        narration: "Use set language to French or Spanish. Now Tobi can speak greetings from all around the world!",
        actionText: "Add 'set language to [French v]' and make Tobi speak 'Bonjour mes amis!' or 'set language to [Spanish v]' and speak 'Hola amigos!'.",
        funTip: "Coding connects people all around the world!",
        blocks: [
          {
            category: "speech",
            shape: "stack",
            text: "set language to [French v]"
          },
          {
            category: "speech",
            shape: "stack",
            text: "speak [Bonjour mes amis!]"
          }
        ],
        spotCheck: "👀 Test it: Can your Tobi say hello in French or Spanish?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Silent Robot",
      story: "Arthur typed 'Hello' into the purple Looks 'say' block, but he couldn't hear any sound coming out of his speakers!",
      narration: "Oopsie Detective! Arthur typed words into the purple 'say' block, but no sound came out! What block does he need to make the computer speak out loud?",
      buggyCode: [
        {
          category: "looks",
          shape: "stack",
          text: "say [Hello!] for (2) seconds"
        }
      ],
      clue: "The purple 'say' block only shows a written cartoon bubble. To hear real speech, you need the green 'speak' block from Text to Speech!",
      howToFix: "Use the green 'speak [Hello!]' block from the Text-to-Speech extension so the computer vocalizes the words.",
      fixedCode: [
        {
          category: "speech",
          shape: "stack",
          text: "speak [Hello!]"
        }
      ]
    },
    superStar: {
      title: "Super Star: The Joke Telling Bear!",
      stars: 4,
      description: "Code Tobi to tell your favorite joke! Make him speak the setup, wait 2 seconds, and speak the funny punchline!",
      easyHint: "Example: 'Why did the teddy bear say no to cake? ... Because he was already stuffed!'"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Recognize common uses of information technology beyond school (AI speech synthesis in phones, smart speakers).",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Discuss smart speakers (Alexa/Siri). How do they talk? Introduce Text to Speech.",
        tobiStoryAndDemo: "10 mins: Show how to open the Extension Library and drag the 'speak' block.",
        handsOnCodingFun: "20 mins: Children experiment with voice presets (kitten, squeak, giant) and type sentences.",
        showAndTellCelebration: "5 mins: Joke showcase! Whose Tobi tells the funniest joke?",
        tidyAndStickers: "5 mins: Save project and award the Voice Commander badge."
      },
      mouseAndKeyboardTips: "For early typists, have short pre-written words on the board like 'Hello', 'Banana', 'Cat', 'Friend' for them to copy.",
      littleMistakesToWatch: [
        "Headphone jack unplugged or volume muted.",
        "Pupils searching for Text to Speech in the main palette without adding the extension first."
      ],
      encouragementWords: "Tell pupils: 'You just programmed Artificial Intelligence! That is cutting-edge technology!'"
    }
  },
  {
    week: 8,
    title: "The Smiling Camera: Face Magic",
    themeTagline: "Use your computer's webcam so Tobi can see your happy smile and dance!",
    badge: {
      name: "AI Visionary",
      icon: "📸",
      description: "Programmed computer vision to detect human smiles and react!"
    },
    tobiMood: "Happy Camera Tobi",
    tobiEmoji: "📸🐻",
    bigIdeaForKids: "Computer Vision is how cameras see! Your computer can look through its camera lens, recognize a human face, and detect if you are smiling!",
    bigIdeaNarration: "Computer Vision is how computers see! Your computer can look through its camera lens, spot your face, and celebrate when it sees you smiling!",
    steps: [
      {
        id: 1,
        title: "Turn On the Video Camera",
        narration: "In PictoBlox, click Add Extension and select Face Detection or Video Sensing. Turn video ON!",
        actionText: "Click 'Add Extension' in the bottom-left corner and pick 'Face Detection' or 'Video Sensing'. Snap 'turn video [on v]' under the Green Flag.",
        funTip: "When your browser asks 'Allow Camera', click the blue Allow button!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "ai",
            shape: "stack",
            text: "turn video [on v]"
          }
        ],
        spotCheck: "👀 Look: Can you see your smiling face appearing softly behind Tobi on the stage?"
      },
      {
        id: 2,
        title: "Keep Watching the Camera",
        narration: "Add a forever loop so the computer continuously watches for your face and emotions.",
        actionText: "From orange Control, snap a 'forever' loop under your video block. Computers need to keep checking continuously!",
        funTip: "The computer checks 30 times every second to see your face!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "forever"
          }
        ],
        spotCheck: "👀 Look: Do you have a forever loop ready to hold your face checks?"
      },
      {
        id: 3,
        title: "The Smile Detector",
        narration: "Inside the loop, add an IF block: If face is smiling, make Tobi jump and cheer!",
        actionText: "Inside the forever loop, snap 'if <is face smiling?> then': add 'say [What a lovely smile!] for (2) secs' and 'start sound [Cheer v]'.",
        funTip: "Give the computer your biggest, brightest, toothiest smile!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <is face smiling?> then",
            nestedBlocks: [
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Cheer v]"
              },
              {
                category: "looks",
                shape: "stack",
                text: "say [What a lovely smile!] for (2) seconds"
              }
            ]
          }
        ],
        spotCheck: "👀 Test it: Look at the webcam and smile big! Does Tobi cheer and smile back?"
      },
      {
        id: 4,
        title: "The Sparkle Dance Reaction",
        narration: "When you smile, make Tobi spin with turn 36 degrees and flash rainbow colours!",
        actionText: "Add 'repeat (10) [turn clockwise (36) degrees]' and 'change [color v] effect by (25)' when a smile is detected.",
        funTip: "Your smile has magical powers to make Tobi dance!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "change [color v] effect by (25)"
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
              }
            ]
          }
        ],
        spotCheck: "👀 Test it: Smile at your screen. Does Tobi do a happy spinning celebration?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Blocked Camera",
      story: "Jack clicked the Green Flag, but his camera screen stayed completely black and Tobi couldn't see anything!",
      narration: "Oopsie Detective! Jack clicked Green Flag, but his camera stayed black! Did he forget to allow camera permission, or did he forget the turn video on block?",
      buggyCode: [
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
              text: "if <is face smiling?> then"
            }
          ]
        }
      ],
      clue: "Before the computer can see your face, you must tell the camera to turn on!",
      howToFix: "Snap 'turn video [on v]' right under 'when green flag clicked' before the forever loop.",
      fixedCode: [
        {
          category: "events",
          shape: "hat",
          text: "when [green flag] clicked"
        },
        {
          category: "ai",
          shape: "stack",
          text: "turn video [on v]"
        }
      ]
    },
    superStar: {
      title: "Super Star: Surprise Face!",
      stars: 5,
      description: "Can you add a second check: 'if <is face surprised?> then make Tobi say [WHOA! You look surprised!]'?",
      easyHint: "Open your eyes wide and open your mouth in an 'O' shape to trigger the surprise reaction!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Use technology purposefully; recognize how computers take input from cameras and sensors.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Facial expression game: Show me your happiest smile! Show me your surprised face!",
        tobiStoryAndDemo: "10 mins: Demonstrate the webcam feed and how AI recognizes human facial landmarks.",
        handsOnCodingFun: "20 mins: Children code their smile-activated dancing Tobi.",
        showAndTellCelebration: "5 mins: Smiles all around! Classmates smile at each other's cameras.",
        tidyAndStickers: "5 mins: Turn off video feeds, save work, and award the AI Visionary badge."
      },
      mouseAndKeyboardTips: "If school computers lack webcams, switch to the 'Video Sensing' motion detection block or use mouse-hover as a fun alternative.",
      littleMistakesToWatch: [
        "Browser blocking camera permissions (click the little padlock icon in the URL bar to allow).",
        "Pupils sitting too far back or lighting too dim for the camera to detect smiles."
      ],
      encouragementWords: "Tell pupils: 'You just trained a computer to recognize human emotions! Fantastic job!'"
    }
  },
  {
    week: 9,
    title: "Catch the Falling Star: My First Game",
    themeTagline: "Steer Tobi with arrow keys to catch glittering stars dropping from the sky!",
    badge: {
      name: "Star Catcher",
      icon: "⭐",
      description: "Built and published a complete interactive arcade game!"
    },
    tobiMood: "Star Collector Tobi",
    tobiEmoji: "⭐🐻",
    bigIdeaForKids: "A video game has three magical parts: A player you steer, a prize to collect, and a celebration sound when you catch it!",
    bigIdeaNarration: "A video game has three magical parts: A hero character you steer, a golden prize to catch, and a celebration sound when you succeed!",
    steps: [
      {
        id: 1,
        title: "Create the Player Hero: Tobi",
        narration: "Put Tobi at the bottom of the stage. Use Right and Left arrow keys to steer Tobi smoothly left and right.",
        actionText: "Make two simple scripts for Tobi: 'when [right arrow v] key pressed' -> 'change x by (15)', and 'when [left arrow v] key pressed' -> 'change x by (-15)'.",
        funTip: "Now you have complete joystick control over Tobi!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [right arrow v] key pressed"
          },
          {
            category: "motion",
            shape: "stack",
            text: "change x by (15)"
          },
          {
            category: "events",
            shape: "hat",
            text: "when [left arrow v] key pressed"
          },
          {
            category: "motion",
            shape: "stack",
            text: "change x by (-15)"
          }
        ],
        spotCheck: "👀 Test it: Can you slide Tobi left and right along the bottom of the stage?"
      },
      {
        id: 2,
        title: "Add a Golden Star Sprite",
        narration: "Add a Star sprite from the library. When Green Flag is clicked, make the star drop slowly from the top of the screen.",
        actionText: "Click 'Choose a Sprite' and add 'Star'. In the Star's code: 'when green flag clicked' -> 'go to x: (0) y: (150)' -> 'forever [change y by (-5)]'.",
        funTip: "Negative 5 makes the star float down gently so you have time to catch it!",
        blocks: [
          {
            category: "events",
            shape: "hat",
            text: "when [green flag] clicked"
          },
          {
            category: "motion",
            shape: "stack",
            text: "go to x: (0) y: (150)"
          },
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
        spotCheck: "👀 Test it: Does the golden star float gently down from the top of the sky?"
      },
      {
        id: 3,
        title: "Catch the Star & Play Magic Chime!",
        narration: "Check if the Star touches Tobi. If it does, play a Coin chime and respawn the star at the top!",
        actionText: "Inside the Star's forever loop, add: 'if <touching [Tobi v]?> then': 'start sound [Coin v]' and 'go to x: (pick random (-160) to (160)) y: (150)'.",
        funTip: "Pick random makes the star drop in a surprise new spot every time!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <touching [Tobi v]?> then",
            nestedBlocks: [
              {
                category: "sound",
                shape: "stack",
                text: "start sound [Coin v]"
              },
              {
                category: "motion",
                shape: "stack",
                text: "go to x: (pick random (-160) to (160)) y: (150)"
              }
            ]
          }
        ],
        spotCheck: "👀 Test it: Catch the star with Tobi. Does it make a 'Coin' sound and drop from a new spot?"
      },
      {
        id: 4,
        title: "What Happens If You Miss?",
        narration: "If the star reaches the bottom of the screen, reset it back to the top so the game never ends!",
        actionText: "Add another check: 'if <(y position) < [-140]> then go to x: (pick random (-160) to (160)) y: (150)'.",
        funTip: "Now your game runs continuously in an endless fun loop!",
        blocks: [
          {
            category: "control",
            shape: "c-block",
            text: "if <(y position) < [-140]> then",
            nestedBlocks: [
              {
                category: "motion",
                shape: "stack",
                text: "go to x: (pick random (-160) to (160)) y: (150)"
              }
            ]
          }
        ],
        spotCheck: "👀 Test it: Can you catch 5 stars in a row?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Flying Up Star",
      story: "Hannah started her game, but the star zoomed upwards off the top of the screen into outer space!",
      narration: "Oopsie Detective! Hannah started her game, but the star flew upwards off the screen! What number needs a minus sign?",
      buggyCode: [
        {
          category: "control",
          shape: "c-block",
          text: "forever",
          nestedBlocks: [
            {
              category: "motion",
              shape: "stack",
              text: "change y by (5)"
            }
          ]
        }
      ],
      clue: "Positive 5 moves UP. To make things drop down, you need a negative number with a minus sign!",
      howToFix: "Change positive 5 to negative -5 so gravity pulls the star down towards Tobi.",
      fixedCode: [
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
      ]
    },
    superStar: {
      title: "Super Star: Star Catcher Scoreboard!",
      stars: 5,
      description: "Click 'Variables' (orange), make a variable named 'Stars Caught', and add 'change [Stars Caught v] by 1' every time Tobi catches a star!",
      easyHint: "Remember to add 'set [Stars Caught v] to 0' when Green Flag is clicked!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Design, create and debug simple programs; work with inputs, outputs, and collision detection.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Discuss video games children love. What makes them fun? The challenge and reward!",
        tobiStoryAndDemo: "10 mins: Live demo: code player movement, star gravity, and collision detection.",
        handsOnCodingFun: "20 mins: Children build their star-catching arcade game.",
        showAndTellCelebration: "5 mins: Arcade challenge! Who can catch 10 stars?",
        tidyAndStickers: "5 mins: Save project ('Star_Game_Name') and award the Star Catcher badge."
      },
      mouseAndKeyboardTips: "If pupils have trouble using keyboard arrow keys, let them use 'set x to (mouse x)' so Tobi glides with their mouse.",
      littleMistakesToWatch: [
        "Confusing 'change y by -5' with 'set y to -5'.",
        "Putting the collision check on the backdrop instead of the Star sprite."
      ],
      encouragementWords: "Tell pupils: 'You just created your very own video game! People will play your game and smile!'"
    }
  },
  {
    week: 10,
    title: "Coding Master Carnival & Graduation",
    themeTagline: "Celebrate your coding superpowers and claim your official Coding Master Certificate!",
    badge: {
      name: "Grand Coding Master",
      icon: "👑",
      description: "Graduated the 10-Week KS1 PictoBlox Course by Shazia Alam!"
    },
    tobiMood: "Graduation Master Tobi",
    tobiEmoji: "🎓🐻",
    bigIdeaForKids: "Congratulations! You know how to talk to computers with algorithms, events, loops, sounds, and Artificial Intelligence!",
    bigIdeaNarration: "Congratulations young programmer! You now know how to talk to computers using algorithms, events, loops, animations, sounds, and Artificial Intelligence! You are an official Coding Master!",
    steps: [
      {
        id: 1,
        title: "Polish Your Favorite Game",
        narration: "Open your favorite project from Weeks 1 to 9. Add cool sound effects and a colorful title for your game!",
        actionText: "Open your favorite project. Give it an awesome name, like 'Super Tobi Star Quest by Leo'. Add extra sparkles and background music!",
        funTip: "Make it look shiny and ready for visitors to play!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "say [Welcome to My Coding Master Game!] for (3) seconds"
          }
        ],
        spotCheck: "👀 Look: Does your game have clear instructions and great sound effects?"
      },
      {
        id: 2,
        title: "Full Screen Arcade Mode",
        narration: "Click the blue expand button in the top-right corner to turn your computer into a full-screen arcade machine!",
        actionText: "Click the blue 'Full Screen' button in the top-right of PictoBlox. Put your headphones ready on your desk for visitors.",
        funTip: "Your computer looks just like a game machine in a fun arcade!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "start sound [Cheer v]"
          }
        ],
        spotCheck: "👀 Look: Is your game playing in full screen mode?"
      },
      {
        id: 3,
        title: "The Coding Master Carnival Walk",
        narration: "Walk around the computer room with your friends. Play each other's games and give high-fives!",
        actionText: "Take turns playing games made by your classmates! Give everyone a big cheer and tell them what you loved about their game.",
        funTip: "Always be kind, encourage your fellow coders, and share the fun!",
        blocks: [
          {
            category: "looks",
            shape: "stack",
            text: "say [High Five, Coding Master!] for (2) seconds"
          }
        ],
        spotCheck: "👀 Celebration: Have you played at least two games made by your friends?"
      },
      {
        id: 4,
        title: "Claim Your Graduation Certificate!",
        narration: "Open the Certificate generator in this app. Type your name and print your official Coding Master Certificate by Shazia Alam!",
        actionText: "Click the purple 'Certificate' button at the top of this app. Type your name, click 'Print Certificate', and celebrate with confetti!",
        funTip: "Take your certificate home and hang it proudly on your bedroom wall!",
        blocks: [
          {
            category: "sound",
            shape: "stack",
            text: "play sound [Fanfare v] until done"
          }
        ],
        spotCheck: "👀 Celebration: Did you receive your official Coding Master Certificate?"
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Forgotten Save",
      story: "Ella built a beautiful jungle game, but closed the computer without saving her project!",
      narration: "Oopsie Detective! Ella made an amazing game, but closed the computer without saving! How do we make sure our game is saved safely?",
      buggyCode: [
        {
          category: "looks",
          shape: "stack",
          text: "say [Goodbye!] for (2) seconds"
        }
      ],
      clue: "Always click File -> Save to your computer before shutting down!",
      howToFix: "Click the 'File' menu at the very top of PictoBlox and click 'Save to your computer' so your game is saved forever.",
      fixedCode: [
        {
          category: "looks",
          shape: "stack",
          text: "say [Game Saved Safely! 💾] for (2) seconds"
        }
      ]
    },
    superStar: {
      title: "Super Star: Coding Master for Life!",
      stars: 5,
      description: "Teach one coding trick you learned (like the green flag or speech magic) to a friend, parent, or brother/sister!",
      easyHint: "When you teach someone else how to code, you become a true Master!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Recognize common uses of technology; evaluate work critically; celebrate digital achievements.",
      lessonPacing: {
        welcomeAndCircleTime: "5 mins: Welcome parents/headteacher if attending. Celebrate 10 weeks of journey.",
        tobiStoryAndDemo: "5 mins: Set up arcade floor: full screen on all monitors.",
        handsOnCodingFun: "20 mins: Carnival play-around: children play each other's games.",
        showAndTellCelebration: "10 mins: Presentation of official 'Coding Master' Certificates created by Shazia Alam.",
        tidyAndStickers: "5 mins: Group photo with certificates and final celebration applause!"
      },
      mouseAndKeyboardTips: "Prepare printed certificates in advance or print directly from the app on cardstock paper.",
      littleMistakesToWatch: [
        "Misspelling a child's name on certificate (verify with class register).",
        "Printer running out of colored ink."
      ],
      encouragementWords: "Say: 'Congratulations! You completed the 10-Week Coding Master course created by Shazia Alam. You are now official Coding Masters!'"
    }
  }
];
