import { JrLesson } from '../types';

export const jrCurriculumData: JrLesson[] = [
  {
    week: 1,
    title: "Wake Up Tobi!",
    themeTagline: "Use the Magic Green Flag block to wake up Tobi the Bear!",
    badge: {
      name: "Green Flag Starter",
      icon: "🚩",
      description: "Learned how to start a Junior Block sequence with the Green Flag!"
    },
    tobiMood: "Sleepy Waking Tobi",
    tobiEmoji: "🥱🐻",
    bigIdeaForKids: "A code recipe runs from left to right like reading a storybook! We always start with the Magic Green Flag tile on the left.",
    bigIdeaNarration: "Welcome to Coding Master! A code recipe runs from left to right just like reading a storybook. We always start with the Magic Green Flag tile on the far left to wake up Tobi!",
    steps: [
      {
        id: 1,
        title: "Place Tobi in the Sunshine",
        actionText: "Open PictoBlox Junior mode. Place Tobi the Bear in the center of your grass stage.",
        narration: "Open PictoBlox Junior mode. Look at your stage and put Tobi right in the center of the green grass.",
        blocks: [
          {
            category: "looks",
            name: "show",
            iconName: "show",
            label: "Show Tobi"
          }
        ],
        spotCheck: "👀 Look: Do you see friendly Tobi standing in the middle of your screen?",
        funTip: "Tobi loves the sunny outdoors!"
      },
      {
        id: 2,
        title: "Snap the Yellow Green Flag",
        actionText: "From the yellow Trigger bar, drag the Green Flag block into your coding ribbon on the bottom.",
        narration: "From the yellow Trigger bar at the top, drag the Green Flag block down into your coding ribbon.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          }
        ],
        spotCheck: "👀 Look: Does your block have a bright green flag on a yellow tile?",
        funTip: "The Green Flag is always your starting block!"
      },
      {
        id: 3,
        title: "Snap the Purple Say Hello Block",
        actionText: "From the purple Looks bar, drag the Speech Bubble block and snap it right next to your Green Flag.",
        narration: "From the purple bar, drag the Speech Bubble block and snap it next to your Green Flag block.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say Hello",
            value: "Hello!"
          }
        ],
        spotCheck: "👀 Test it: Click the Green Flag. Does a speech bubble pop up over Tobi saying Hello?",
        funTip: "Junior blocks snap together from left to right!",
        simulationAction: {
          type: 'say',
          value: 1
        }
      },
      {
        id: 4,
        title: "Finish with the Red End Block",
        actionText: "From the red bar, snap the Red Stop block at the end of your recipe to finish your sequence.",
        narration: "From the red bar on the right, snap the Red Stop block to neatly finish your recipe.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say Hello",
            value: "Hello!"
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Click the Green Flag above the stage. Did Tobi wake up and say Hello?",
        funTip: "Every complete recipe has a start and an end!",
        simulationAction: {
          type: 'say',
          value: 1
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: Backwards Blocks",
      story: "Little Leo put his Red End block at the start and the Green Flag at the end! Tobi got completely confused and couldn't start!",
      narration: "Oopsie Detective! Little Leo put his blocks backwards. Tobi couldn't start! Which block must always be on the far left?",
      buggyBlocks: [
        {
          category: "end",
          name: "end",
          iconName: "end",
          label: "End"
        },
        {
          category: "looks",
          name: "say",
          iconName: "say",
          label: "Say Hello",
          value: "Hello!"
        },
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        }
      ],
      clue: "Junior block code runs from left to right! The yellow Green Flag must always be first on the left.",
      howToFix: "Move the yellow Green Flag to the very beginning on the left, and put the red End block on the right.",
      fixedBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "looks",
          name: "say",
          iconName: "say",
          label: "Say Hello",
          value: "Hello!"
        },
        {
          category: "end",
          name: "end",
          iconName: "end",
          label: "End"
        }
      ]
    },
    superStar: {
      title: "Super Star: Pick a Colorful Background!",
      stars: 3,
      description: "Click the picture button at the top to choose a sunny beach, park, or magical candy land for Tobi!",
      easyHint: "Look for the icon with trees and a sun at the top of PictoBlox Jr!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Understand what algorithms are; understand that programs execute by following precise, ordered instructions.",
      lessonPacing: {
        circleTime: "5 mins: Introduce Tobi the Bear and demonstrate reading left-to-right.",
        tobiDemo: "10 mins: Show how Junior Blocks snap together horizontally on the bottom ribbon.",
        handsOnRibbon: "20 mins: Children assemble their 3-block sequence and test the Green Flag.",
        carnivalShowcase: "5 mins: High-five! Children show their waving Tobi to a partner.",
        tidyAndCelebrate: "5 mins: Award the Green Flag Starter badge."
      },
      juniorBlocksTips: "Remind pupils that in Junior Blocks, blocks connect side-by-side like train carriages, not vertically.",
      littleOopsiesToWatch: [
        "Pupils dropping blocks outside the ribbon bar.",
        "Accidentally dragging the character instead of clicking the green flag."
      ],
      encouragementWords: "Tell pupils: 'You just coded your first Junior Block train! Super work, Coding Master!'"
    }
  },
  {
    week: 2,
    title: "Tap & Pop!",
    themeTagline: "Tap Tobi to make him play funny sounds and pop bigger!",
    badge: {
      name: "Tap Magician",
      icon: "👆",
      description: "Coded interactive touch events and funny audio pops!"
    },
    tobiMood: "Playful Bouncing Tobi",
    tobiEmoji: "🎉🐻",
    bigIdeaForKids: "Instead of clicking the Green Flag, we can use the 'Start on Tap' block so Tobi reacts whenever your finger or mouse taps him!",
    bigIdeaNarration: "Instead of clicking the Green Flag, we can use the Start on Tap block so Tobi reacts whenever your finger or mouse taps him directly!",
    steps: [
      {
        id: 1,
        title: "The Yellow Tap Hand",
        actionText: "From the yellow Trigger bar, drag the 'Start on Tap' block (the one with a tapping finger).",
        narration: "From the yellow bar, drag the Start on Tap block. It has a picture of a finger tapping!",
        blocks: [
          {
            category: "trigger",
            name: "tap",
            iconName: "tap",
            label: "Start on Tap"
          }
        ],
        spotCheck: "👀 Look: Does your block show a hand pointing its finger upwards?",
        funTip: "This block listens for your finger touches!"
      },
      {
        id: 2,
        title: "Add the Green Pop Sound",
        actionText: "From the green Sound bar, snap the 'Pop Sound' block next to your Tap block.",
        narration: "From the green bar, snap the Pop Sound block next to your tap block.",
        blocks: [
          {
            category: "trigger",
            name: "tap",
            iconName: "tap",
            label: "Start on Tap"
          },
          {
            category: "sound",
            name: "pop",
            iconName: "pop",
            label: "Pop Sound"
          }
        ],
        spotCheck: "👀 Test it: Click or tap Tobi on the stage. Does he make a cheerful POP sound?",
        funTip: "Pop! Pop! Pop! Every tap makes a cute bubble sound!",
        simulationAction: {
          type: 'pop',
          value: 1
        }
      },
      {
        id: 3,
        title: "Make Tobi Grow Bigger!",
        actionText: "From the purple Looks bar, snap the 'Grow' block (with a big person icon). Set its number to 2.",
        narration: "From the purple bar, snap the Grow block with a plus sign, and put the number 2 below it.",
        blocks: [
          {
            category: "trigger",
            name: "tap",
            iconName: "tap",
            label: "Start on Tap"
          },
          {
            category: "sound",
            name: "pop",
            iconName: "pop",
            label: "Pop Sound"
          },
          {
            category: "looks",
            name: "grow",
            iconName: "grow",
            label: "Grow",
            value: 2
          }
        ],
        spotCheck: "👀 Test it: Tap Tobi. Does he make a pop sound and grow bigger like a giant teddy?",
        funTip: "Tobi is inflating like a party balloon!",
        simulationAction: {
          type: 'grow',
          value: 2
        }
      },
      {
        id: 4,
        title: "Snap the Red End Block",
        actionText: "Snap the red Stop block to finish your tap recipe.",
        narration: "Snap the red Stop block at the end of your ribbon.",
        blocks: [
          {
            category: "trigger",
            name: "tap",
            iconName: "tap",
            label: "Start on Tap"
          },
          {
            category: "sound",
            name: "pop",
            iconName: "pop",
            label: "Pop Sound"
          },
          {
            category: "looks",
            name: "grow",
            iconName: "grow",
            label: "Grow",
            value: 2
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Tap Tobi 3 times! Does he grow and pop with every tap?",
        funTip: "Click the Reset Size button at the top if Tobi gets too big!",
        simulationAction: {
          type: 'grow',
          value: 2
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Frozen Bear",
      story: "Oliver tapped Tobi on screen, but nothing happened! He looked at his ribbon and saw he accidentally used the Green Flag instead of the Tap block!",
      narration: "Oopsie Detective! Oliver tapped Tobi, but nothing happened. He used the Green Flag block by mistake! What block does he need for tapping?",
      buggyBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "sound",
          name: "pop",
          iconName: "pop",
          label: "Pop Sound"
        }
      ],
      clue: "The Green Flag only reacts to the flag button. To react to your finger, use the yellow Tap block!",
      howToFix: "Replace the Green Flag with the yellow 'Start on Tap' finger block.",
      fixedBlocks: [
        {
          category: "trigger",
          name: "tap",
          iconName: "tap",
          label: "Start on Tap"
        },
        {
          category: "sound",
          name: "pop",
          iconName: "pop",
          label: "Pop Sound"
        }
      ]
    },
    superStar: {
      title: "Super Star: Shrink Back to Normal!",
      stars: 3,
      description: "Can you add a Shrink block (minus sign) right after the Grow block so Tobi pops big and shrinks right back?",
      easyHint: "Look in the purple Looks bar for the small figure with a minus sign!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Create and debug simple programs; explore touch input events and digital audio output.",
      lessonPacing: {
        circleTime: "5 mins: Discuss touch screens and tapping toys. Introduce 'Start on Tap'.",
        tobiDemo: "10 mins: Demonstrate the Grow block and changing the number badge below the block.",
        handsOnRibbon: "20 mins: Children code their tap-to-pop Tobi.",
        carnivalShowcase: "5 mins: Pop concert! Pupils tap their neighbor's Tobi to hear pops.",
        tidyAndCelebrate: "5 mins: Award the Tap Magician badge."
      },
      juniorBlocksTips: "Show children how clicking the number badge below a block opens a number keypad to change 1 to 2 or 3.",
      littleOopsiesToWatch: [
        "Pupils tapping the code block instead of tapping Tobi on the stage.",
        "Setting the grow number too high (e.g., 99)."
      ],
      encouragementWords: "Tell pupils: 'You just coded an interactive touchscreen game! Outstanding!'"
    }
  },
  {
    week: 3,
    title: "Tobi's Stepping Stones",
    themeTagline: "Guide Tobi step-by-step across the river stepping stones!",
    badge: {
      name: "Stone Hopper",
      icon: "🐾",
      description: "Mastered directional Move Right and Move Left blocks!"
    },
    tobiMood: "Adventurous Hiking Tobi",
    tobiEmoji: "🏞️🐻",
    bigIdeaForKids: "The blue Motion blocks tell characters which way to walk! The arrow pointing right moves forward, and the number tells Tobi how many steps to take.",
    bigIdeaNarration: "The blue Motion blocks tell characters which way to walk! The arrow pointing right moves forward, and the number tells Tobi how many steps to take across the river!",
    steps: [
      {
        id: 1,
        title: "Start on the Riverbank",
        actionText: "Pick the River or Forest backdrop. Drag Tobi to the far left of the riverbank.",
        narration: "Pick the River backdrop and put Tobi on the left side of the screen.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          }
        ],
        spotCheck: "👀 Look: Is Tobi standing ready on the left side of the river?",
        funTip: "Tobi is ready to cross the stepping stones!"
      },
      {
        id: 2,
        title: "Take 3 Steps to the Right",
        actionText: "From the blue Motion bar, drag the 'Move Right' block (arrow pointing right). Set the number badge to 3.",
        narration: "From the blue bar, drag the Move Right block with the arrow pointing right, and set the number to 3.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 3
          }
        ],
        spotCheck: "👀 Test it: Click the Green Flag. Does Tobi march 3 steps forward?",
        funTip: "The number 3 means three big steps!",
        simulationAction: {
          type: 'move_right',
          value: 3
        }
      },
      {
        id: 3,
        title: "Hop Over the Water!",
        actionText: "From the blue bar, snap the 'Hop' block (the jumping arc arrow). Set the number to 2 hops.",
        narration: "From the blue bar, snap the Hop block to make Tobi jump over the splashing water!",
        blocks: [
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 3
          },
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          }
        ],
        spotCheck: "👀 Test it: Does Tobi walk forward and then hop into the air?",
        funTip: "Boing! Tobi hops safely onto the big stepping stone!",
        simulationAction: {
          type: 'hop',
          value: 2
        }
      },
      {
        id: 4,
        title: "Finish the Cross Sequence",
        actionText: "Snap 'Move Right 2' more steps and finish with the Red End block.",
        narration: "Add Move Right 2 more steps and finish with the red Stop block.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 3
          },
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          },
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 2
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi walk, hop, and reach the other side safely?",
        funTip: "Tobi crossed the entire river!",
        simulationAction: {
          type: 'move_right',
          value: 3
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: Walking the Wrong Way!",
      story: "Maya wanted Tobi to walk forward across the river, but Tobi walked backwards into a prickly bush!",
      narration: "Oopsie Detective! Maya wanted Tobi to walk forward, but Tobi walked backwards! Which arrow block was used by mistake?",
      buggyBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "motion",
          name: "left",
          iconName: "left",
          label: "Move Left",
          value: 3
        }
      ],
      clue: "Look closely at the blue arrow. Does it point left or right?",
      howToFix: "Swap the Move Left arrow block for the blue Move Right arrow block.",
      fixedBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "motion",
          name: "right",
          iconName: "right",
          label: "Move Right",
          value: 3
        }
      ]
    },
    superStar: {
      title: "Super Star: Victory Cheer!",
      stars: 4,
      description: "When Tobi reaches the other side of the river, add a purple Say block that says 'Made It!' and a cheer sound!",
      easyHint: "Snap the speech bubble block right before the red End block!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Use logical reasoning to predict program behavior; understand sequencing and direction in algorithms.",
      lessonPacing: {
        circleTime: "5 mins: Physical Simon Says: 'Take 2 steps right!', 'Hop 1 time!'.",
        tobiDemo: "10 mins: Demonstrate the blue Move Right arrow and the Hop block.",
        handsOnRibbon: "20 mins: Children code Tobi's stepping stone journey.",
        carnivalShowcase: "5 mins: River crossing challenge: watch each other's bears cross.",
        tidyAndCelebrate: "5 mins: Award the Stone Hopper badge."
      },
      juniorBlocksTips: "Use masking tape on the classroom floor to make 3 stepping stones so children can physically walk the algorithm first.",
      littleOopsiesToWatch: [
        "Confusing Left arrow with Right arrow.",
        "Tobi walking completely off the right edge of the stage (click the blue reset button at the top)."
      ],
      encouragementWords: "Tell pupils: 'You just programmed real robot navigation! Brilliant job!'"
    }
  },
  {
    week: 4,
    title: "Up, Up and Down!",
    themeTagline: "Climb the tall jungle tree for honey, then climb safely back down!",
    badge: {
      name: "Tree Climber",
      icon: "🌳",
      description: "Mastered vertical Move Up and Move Down blocks with timing pauses!"
    },
    tobiMood: "Hungry Climbing Tobi",
    tobiEmoji: "🍯🐻",
    bigIdeaForKids: "Move Up takes characters high into the sky! Move Down brings them back to the ground. The orange Stopwatch block pauses so Tobi can eat delicious honey!",
    bigIdeaNarration: "Move Up takes characters high into the sky! Move Down brings them back to the ground. The orange Stopwatch block pauses so Tobi can enjoy some sweet honey!",
    steps: [
      {
        id: 1,
        title: "Stand Under the Honey Tree",
        actionText: "Pick a tree backdrop and place Tobi right at the bottom trunk of the tree.",
        narration: "Pick a tree backdrop and place Tobi right at the bottom trunk.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          }
        ],
        spotCheck: "👀 Look: Is Tobi looking up at the tall tree?",
        funTip: "Look high up in the branches—there is sweet honey!"
      },
      {
        id: 2,
        title: "Climb Up into the Branches",
        actionText: "From the blue Motion bar, drag the 'Move Up' block (arrow pointing up). Set the number to 4.",
        narration: "From the blue bar, snap the Move Up block with the arrow pointing up, and set the number to 4.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "up",
            iconName: "up",
            label: "Move Up",
            value: 4
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi climb straight up into the leafy tree?",
        funTip: "Climb, climb, climb! 4 steps up!",
        simulationAction: {
          type: 'move_up',
          value: 3
        }
      },
      {
        id: 3,
        title: "Pause to Eat the Honey!",
        actionText: "From the orange Control bar, snap the 'Wait / Stopwatch' block. Set it to 2 seconds.",
        narration: "From the orange bar, snap the Stopwatch block so Tobi can pause and eat honey for 2 seconds.",
        blocks: [
          {
            category: "motion",
            name: "up",
            iconName: "up",
            label: "Move Up",
            value: 4
          },
          {
            category: "control",
            name: "wait",
            iconName: "wait",
            label: "Wait",
            value: 2
          },
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say Yummy",
            value: "Yummy Honey!"
          }
        ],
        spotCheck: "👀 Test it: Does Tobi pause in the tree and say 'Yummy Honey!'?",
        funTip: "The stopwatch block gives Tobi time to eat!",
        simulationAction: {
          type: 'say',
          value: 1
        }
      },
      {
        id: 4,
        title: "Climb Safely Back Down",
        actionText: "From the blue bar, snap 'Move Down 4' and finish with the Red End block.",
        narration: "Snap the Move Down block with the arrow pointing down, set to 4, and finish with the red Stop block.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "up",
            iconName: "up",
            label: "Move Up",
            value: 4
          },
          {
            category: "control",
            name: "wait",
            iconName: "wait",
            label: "Wait",
            value: 2
          },
          {
            category: "motion",
            name: "down",
            iconName: "down",
            label: "Move Down",
            value: 4
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi climb up, pause to eat, and climb safely back down?",
        funTip: "Safe and sound back on the grass!",
        simulationAction: {
          type: 'move_down',
          value: 3
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: Stuck in the Sky!",
      story: "Ben's Tobi climbed up into the tree, but stayed floating in the sky forever and never came back down!",
      narration: "Oopsie Detective! Ben's Tobi climbed up, but stayed stuck in the sky! What block was missing to bring him back down?",
      buggyBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "motion",
          name: "up",
          iconName: "up",
          label: "Move Up",
          value: 4
        },
        {
          category: "end",
          name: "end",
          iconName: "end",
          label: "End"
        }
      ],
      clue: "If you climb UP 4 steps, you need an arrow pointing DOWN 4 steps to return to earth!",
      howToFix: "Add a blue 'Move Down 4' block before the red End block.",
      fixedBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "motion",
          name: "up",
          iconName: "up",
          label: "Move Up",
          value: 4
        },
        {
          category: "motion",
          name: "down",
          iconName: "down",
          label: "Move Down",
          value: 4
        },
        {
          category: "end",
          name: "end",
          iconName: "end",
          label: "End"
        }
      ]
    },
    superStar: {
      title: "Super Star: Honey Chomp Sound!",
      stars: 4,
      description: "Can you add a green Sound block while Tobi is in the tree so he makes a funny crunch or pop sound while eating?",
      easyHint: "Snap the green Pop Sound block right next to the Wait block!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Design, write and debug simple programs; understand opposites in algorithms (Up vs Down).",
      lessonPacing: {
        circleTime: "5 mins: Discuss opposites: Up and Down, High and Low.",
        tobiDemo: "10 mins: Demonstrate the orange Wait/Timer block and vertical motion arrows.",
        handsOnRibbon: "20 mins: Children code the honey tree climb.",
        carnivalShowcase: "5 mins: Honey festival! Children watch each other's climbing bears.",
        tidyAndCelebrate: "5 mins: Award the Tree Climber badge."
      },
      juniorBlocksTips: "Explain the orange Stopwatch block as 'sleeping for a little bit' so characters don't rush through actions instantly.",
      littleOopsiesToWatch: [
        "Pupils setting Move Up to 15 which sends Tobi off screen.",
        "Missing the Move Down block."
      ],
      encouragementWords: "Tell pupils: 'You just animated a full story with a beginning, middle, and end! Fantastic!'"
    }
  },
  {
    week: 5,
    title: "Tobi's Kangaroo Hops & Twirls",
    themeTagline: "Code a gymnastics routine with bouncy hops and spinning cartwheels!",
    badge: {
      name: "Gymnastics Star",
      icon: "🦘",
      description: "Mastered turning rotations and acrobatic jumping combinations!"
    },
    tobiMood: "Acrobatic Twirling Tobi",
    tobiEmoji: "🤸🐻",
    bigIdeaForKids: "You can combine hops and turns to make acrobatic dance moves! The Turn Right block makes Tobi spin like a ballerina.",
    bigIdeaNarration: "You can combine hops and turns to create acrobatic dance moves! The Turn Right block makes Tobi spin in a circle like a ballerina on stage!",
    steps: [
      {
        id: 1,
        title: "Start the Gymnastics Show",
        actionText: "Pick the Theater or Gym backdrop. Put Tobi on the left side of the floor.",
        narration: "Pick the Gym backdrop and snap the yellow Green Flag block.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          }
        ],
        spotCheck: "👀 Look: Is Tobi ready on the gym mat?",
        funTip: "The audience is watching Tobi's routine!"
      },
      {
        id: 2,
        title: "Add 2 Kangaroo Hops",
        actionText: "From blue Motion, snap the 'Hop' block and set it to 2 big hops.",
        narration: "From the blue bar, snap the Hop block and set the number to 2 big hops.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi spring high into the air two times?",
        funTip: "Boing! Boing!",
        simulationAction: {
          type: 'hop',
          value: 2
        }
      },
      {
        id: 3,
        title: "Do a 360 Ballerina Spin!",
        actionText: "From blue Motion, snap the 'Turn Right' block (curved arrow). Set the number to 1 full turn.",
        narration: "From the blue bar, snap the Turn Right curved arrow block to make Tobi spin around.",
        blocks: [
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          },
          {
            category: "motion",
            name: "turn_right",
            iconName: "turn_right",
            label: "Turn Right",
            value: 1
          }
        ],
        spotCheck: "👀 Test it: Does Tobi hop twice and then twirl around in a circle?",
        funTip: "A full pirouette spin!",
        simulationAction: {
          type: 'spin',
          value: 1
        }
      },
      {
        id: 4,
        title: "Grand Finish Bow",
        actionText: "Snap 'Move Right 2', then 'Say Ta-da!', and finish with the Red End block.",
        narration: "Add Move Right 2, Say Ta-da, and finish with the red Stop block.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          },
          {
            category: "motion",
            name: "turn_right",
            iconName: "turn_right",
            label: "Turn Right",
            value: 1
          },
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say Ta-da",
            value: "Ta-da!"
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi hop, spin, walk forward, and take a bow?",
        funTip: "Give Tobi a big round of applause!",
        simulationAction: {
          type: 'spin',
          value: 1
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: Tilted Bear",
      story: "Ruby used Turn Right with number 6, but Tobi stopped completely tilted sideways and couldn't stand straight!",
      narration: "Oopsie Detective! Ruby used a big turn number, and Tobi was left tilted sideways! How do we make Tobi do a clean full turn?",
      buggyBlocks: [
        {
          category: "motion",
          name: "turn_right",
          iconName: "turn_right",
          label: "Turn Right",
          value: 6
        }
      ],
      clue: "In Junior Blocks, number 12 is a full clean circle. If Tobi is tilted, click the blue Reset button to straighten him up!",
      howToFix: "Set the turn number to 1 or 12 for a complete round turn.",
      fixedBlocks: [
        {
          category: "motion",
          name: "turn_right",
          iconName: "turn_right",
          label: "Turn Right",
          value: 1
        }
      ]
    },
    superStar: {
      title: "Super Star: Double Cartwheel!",
      stars: 4,
      description: "Can you make Tobi turn right, hop, and turn left so he looks like a super gymnast?",
      easyHint: "Snap the curved Turn Left block right after the Hop block!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Create and debug simple programs; understand rotation angles and choreography sequences.",
      lessonPacing: {
        circleTime: "5 mins: Standing twirl warm-up: turn in a full circle, stop and bow.",
        tobiDemo: "10 mins: Demonstrate the difference between straight arrows and curved rotation arrows.",
        handsOnRibbon: "20 mins: Children code Tobi's gymnastics choreography.",
        carnivalShowcase: "5 mins: Talent show! Pupils present their acrobat routines.",
        tidyAndCelebrate: "5 mins: Award the Gymnastics Star badge."
      },
      juniorBlocksTips: "Explain that the curved arrow means 'twirling like a top'.",
      littleOopsiesToWatch: [
        "Pupils getting dizzy watching Tobi spin with huge numbers.",
        "Tobi landing upside down (show the Reset button)."
      ],
      encouragementWords: "Tell pupils: 'You just choreographed an Olympic dance routine! Bravo!'"
    }
  },
  {
    week: 6,
    title: "Peek-a-Boo Disguises!",
    themeTagline: "Make Tobi vanish into thin air and reappear with a surprise sound!",
    badge: {
      name: "Master of Mystery",
      icon: "🙈",
      description: "Mastered Hide and Show visibility blocks with timed surprises!"
    },
    tobiMood: "Magician Mystery Tobi",
    tobiEmoji: "🎩🐻",
    bigIdeaForKids: "The Hide block makes characters completely invisible like a magician! The Show block makes them reappear when it's time for peek-a-boo!",
    bigIdeaNarration: "The Hide block makes characters completely invisible like magic! The Show block makes them reappear when it's time to shout Peek-a-boo!",
    steps: [
      {
        id: 1,
        title: "Set the Magic Stage",
        actionText: "Pick a Magic Castle or Garden backdrop. Start your sequence with 'Start on Tap'.",
        narration: "Pick the Magic Castle backdrop and start your sequence with the yellow Start on Tap block.",
        blocks: [
          {
            category: "trigger",
            name: "tap",
            iconName: "tap",
            label: "Start on Tap"
          }
        ],
        spotCheck: "👀 Look: Is your Tap block ready on your ribbon?",
        funTip: "When someone taps Tobi, the magic trick begins!"
      },
      {
        id: 2,
        title: "Disappear into Thin Air!",
        actionText: "From purple Looks, snap the 'Hide' block (the figure fading away).",
        narration: "From the purple bar, snap the Hide block to make Tobi vanish into thin air!",
        blocks: [
          {
            category: "trigger",
            name: "tap",
            iconName: "tap",
            label: "Start on Tap"
          },
          {
            category: "looks",
            name: "hide",
            iconName: "hide",
            label: "Hide"
          }
        ],
        spotCheck: "👀 Test it: Tap Tobi. Does he completely vanish from the stage?",
        funTip: "Where did Tobi go?! He is invisible!",
        simulationAction: {
          type: 'shrink',
          value: 1
        }
      },
      {
        id: 3,
        title: "Count to 2 in the Shadows",
        actionText: "From orange Control, snap the 'Wait' stopwatch block and set it to 2 seconds.",
        narration: "From the orange bar, snap the Stopwatch block set to 2 seconds so Tobi stays hidden for a moment.",
        blocks: [
          {
            category: "looks",
            name: "hide",
            iconName: "hide",
            label: "Hide"
          },
          {
            category: "control",
            name: "wait",
            iconName: "wait",
            label: "Wait",
            value: 2
          }
        ],
        spotCheck: "👀 Look: Does the stopwatch give the audience 2 seconds of suspense?",
        funTip: "Shhh... Tobi is hiding behind the curtains!"
      },
      {
        id: 4,
        title: "Reappear and Shout PEEK-A-BOO!",
        actionText: "Snap 'Show', then 'Pop Sound', then 'Say Peek-a-Boo!', and finish with the Red End block.",
        narration: "Snap the Show block, Pop Sound, Say Peek-a-boo, and the red Stop block.",
        blocks: [
          {
            category: "trigger",
            name: "tap",
            iconName: "tap",
            label: "Start on Tap"
          },
          {
            category: "looks",
            name: "hide",
            iconName: "hide",
            label: "Hide"
          },
          {
            category: "control",
            name: "wait",
            iconName: "wait",
            label: "Wait",
            value: 2
          },
          {
            category: "looks",
            name: "show",
            iconName: "show",
            label: "Show"
          },
          {
            category: "sound",
            name: "pop",
            iconName: "pop",
            label: "Pop Sound"
          },
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say Peek-a-boo",
            value: "Peek-a-Boo!"
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Tap Tobi. Does he vanish, wait 2 seconds, pop back onto screen, and shout Peek-a-Boo?",
        funTip: "The ultimate magic trick!",
        simulationAction: {
          type: 'say',
          value: 1
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Vanished Bear",
      story: "Hannah clicked her code, Tobi vanished, but he never came back! The screen stayed totally empty!",
      narration: "Oopsie Detective! Hannah's Tobi vanished and never came back! What block did she forget to make him reappear?",
      buggyBlocks: [
        {
          category: "trigger",
          name: "tap",
          iconName: "tap",
          label: "Start on Tap"
        },
        {
          category: "looks",
          name: "hide",
          iconName: "hide",
          label: "Hide"
        },
        {
          category: "end",
          name: "end",
          iconName: "end",
          label: "End"
        }
      ],
      clue: "If you tell a character to Hide, you MUST have a purple Show block to bring them back!",
      howToFix: "Snap the purple 'Show' block after the Hide block so Tobi reappears.",
      fixedBlocks: [
        {
          category: "trigger",
          name: "tap",
          iconName: "tap",
          label: "Start on Tap"
        },
        {
          category: "looks",
          name: "hide",
          iconName: "hide",
          label: "Hide"
        },
        {
          category: "looks",
          name: "show",
          iconName: "show",
          label: "Show"
        },
        {
          category: "end",
          name: "end",
          iconName: "end",
          label: "End"
        }
      ]
    },
    superStar: {
      title: "Super Star: Double Surprise!",
      stars: 4,
      description: "When Tobi reappears, add a 'Grow 2' block so he pops back twice as big as before!",
      easyHint: "Snap the Grow block right after the Show block!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Understand visibility states in digital content; design sequences with timed surprises.",
      lessonPacing: {
        circleTime: "5 mins: Play a quick game of classroom peek-a-boo: hands over eyes, then surprise!",
        tobiDemo: "10 mins: Demonstrate Hide and Show blocks and why Show is essential.",
        handsOnRibbon: "20 mins: Children code their peek-a-boo illusion.",
        carnivalShowcase: "5 mins: Magic show! Who can surprise their neighbor with the best peek-a-boo?",
        tidyAndCelebrate: "5 mins: Award the Master of Mystery badge."
      },
      juniorBlocksTips: "If children panic because their character disappeared, show them the purple 'Show' block in the palette—clicking it once brings the character right back.",
      littleOopsiesToWatch: [
        "Pupils forgetting to put the Show block.",
        "Setting Wait timer to 20 seconds instead of 2 seconds."
      ],
      encouragementWords: "Tell pupils: 'You just coded an interactive magic show! You are true wizards!'"
    }
  },
  {
    week: 7,
    title: "The Magic Repeat Loop",
    themeTagline: "Wrap your blocks in the Orange Repeat Loop to do dance moves 4 times!",
    badge: {
      name: "Loop Master",
      icon: "🔄",
      description: "Mastered repeating patterns without snapping repetitive blocks!"
    },
    tobiMood: "Dancing Rhythm Tobi",
    tobiEmoji: "🕺🐻",
    bigIdeaForKids: "A Repeat Loop is a clever shortcut! Instead of snapping 4 Move blocks and 4 Hop blocks, you snap 1 of each inside the Repeat bracket and tell it to repeat 4 times!",
    bigIdeaNarration: "A Repeat Loop is a clever shortcut! Instead of snapping 4 Move blocks and 4 Hop blocks, you put them inside the Repeat loop and let the computer do all the hard work!",
    steps: [
      {
        id: 1,
        title: "The Green Flag Leader",
        actionText: "Drag the yellow Green Flag block into your ribbon.",
        narration: "Drag the yellow Green Flag block to start your dance routine.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          }
        ],
        spotCheck: "👀 Look: Is the Green Flag ready to lead the dance?",
        funTip: "Get ready to repeat!"
      },
      {
        id: 2,
        title: "The Orange Repeat Loop Bracket",
        actionText: "From orange Control, snap the 'Repeat' block. Notice it has an opening bracket to hold other blocks inside!",
        narration: "From the orange bar, snap the Repeat block with the looping arrow and set its number to 4.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "control",
            name: "repeat",
            iconName: "repeat",
            label: "Repeat Loop",
            value: 4
          }
        ],
        spotCheck: "👀 Look: Does your repeat block have the number 4 underneath it?",
        funTip: "The number 4 means: do everything inside four times!",
        simulationAction: {
          type: 'hop',
          value: 2
        }
      },
      {
        id: 3,
        title: "Put Dance Steps Inside the Loop",
        actionText: "Put 'Move Right 1' and 'Hop 1' INSIDE the Repeat loop.",
        narration: "Put Move Right 1 and Hop 1 right inside the repeat loop bracket.",
        blocks: [
          {
            category: "control",
            name: "repeat",
            iconName: "repeat",
            label: "Repeat 4 times",
            value: 4,
            nestedBlocks: [
              {
                category: "motion",
                name: "right",
                iconName: "right",
                label: "Move Right",
                value: 1
              },
              {
                category: "motion",
                name: "hop",
                iconName: "hop",
                label: "Hop",
                value: 1
              }
            ]
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi step-and-hop four times in a row across the stage?",
        funTip: "Step-hop, step-hop, step-hop, step-hop!",
        simulationAction: {
          type: 'hop',
          value: 3
        }
      },
      {
        id: 4,
        title: "Finish with the Red End Block",
        actionText: "Snap the Red Stop block outside, after your repeat loop.",
        narration: "Snap the red Stop block outside the repeat loop to finish the dance.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "control",
            name: "repeat",
            iconName: "repeat",
            label: "Repeat 4 times",
            value: 4,
            nestedBlocks: [
              {
                category: "motion",
                name: "right",
                iconName: "right",
                label: "Move Right",
                value: 1
              },
              {
                category: "motion",
                name: "hop",
                iconName: "hop",
                label: "Hop",
                value: 1
              }
            ]
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Did Tobi complete a 4-step rhythm dance with only 2 movement blocks?",
        funTip: "Loops save time and keep your code tidy!",
        simulationAction: {
          type: 'hop',
          value: 3
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: Left Out in the Cold!",
      story: "Jack wanted the Hop block to repeat 4 times, but he snapped it AFTER the loop instead of INSIDE! Tobi only hopped once at the very end!",
      narration: "Oopsie Detective! Jack wanted the Hop to repeat 4 times, but he put it outside the loop! Where must the blocks go to repeat?",
      buggyBlocks: [
        {
          category: "control",
          name: "repeat",
          iconName: "repeat",
          label: "Repeat 4 times",
          value: 4,
          nestedBlocks: [
            {
              category: "motion",
              name: "right",
              iconName: "right",
              label: "Move Right",
              value: 1
            }
          ]
        },
        {
          category: "motion",
          name: "hop",
          iconName: "hop",
          label: "Hop",
          value: 1
        }
      ],
      clue: "To make an action repeat, it must be hugged INSIDE the orange bracket!",
      howToFix: "Drag the blue Hop block inside the orange Repeat bracket next to the Move Right block.",
      fixedBlocks: [
        {
          category: "control",
          name: "repeat",
          iconName: "repeat",
          label: "Repeat 4 times",
          value: 4,
          nestedBlocks: [
            {
              category: "motion",
              name: "right",
              iconName: "right",
              label: "Move Right",
              value: 1
            },
            {
              category: "motion",
              name: "hop",
              iconName: "hop",
              label: "Hop",
              value: 1
            }
          ]
        }
      ]
    },
    superStar: {
      title: "Super Star: 8-Step Dance Party!",
      stars: 4,
      description: "Change the Repeat loop number from 4 to 8! Watch Tobi dance all the way across the stage!",
      easyHint: "Click the number 4 below the Repeat block and tap 8 on the number pad!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Understand what algorithms are; use repetition (loops) to create patterns and efficient programs.",
      lessonPacing: {
        circleTime: "5 mins: Clapping rhythm patterns (Clap-tap, Clap-tap, Clap-tap).",
        tobiDemo: "10 mins: Demonstrate the Repeat loop and how it acts like a container.",
        handsOnRibbon: "20 mins: Children code their repeating dance routine.",
        carnivalShowcase: "5 mins: Class dance! Everyone plays their repeat sequence together.",
        tidyAndCelebrate: "5 mins: Award the Loop Master badge."
      },
      juniorBlocksTips: "Use the analogy of a lunchbox: the orange repeat block is the lunchbox, and your movement blocks are the sandwiches inside!",
      littleOopsiesToWatch: [
        "Pupils dropping blocks beside the loop instead of inside.",
        "Putting the red End block inside the repeat loop (which stops the program on step 1)."
      ],
      encouragementWords: "Tell pupils: 'You just mastered one of the most powerful concepts in computer science! Incredible!'"
    }
  },
  {
    week: 8,
    title: "Friendly Animal Bump!",
    themeTagline: "Make two animals greet each other when they bump together!",
    badge: {
      name: "Friendship Builder",
      icon: "💥",
      description: "Mastered collision detection and multi-character interactions!"
    },
    tobiMood: "Friendly Hugging Tobi",
    tobiEmoji: "🤝🐻",
    bigIdeaForKids: "The yellow 'Start on Bump' block triggers when two characters touch! When Tobi bumps into his friend the Rabbit, both cheer and say Hello!",
    bigIdeaNarration: "The yellow Start on Bump block triggers when two characters touch each other! When Tobi bumps into his friend the Rabbit, both cheer and say Hello!",
    steps: [
      {
        id: 1,
        title: "Add a Rabbit Friend",
        actionText: "Click the plus sign to add a new character: choose Rabbit! Place Rabbit on the right side of the stage.",
        narration: "Add a new character called Rabbit, and put Rabbit on the right side of the stage.",
        blocks: [
          {
            category: "looks",
            name: "show",
            iconName: "show",
            label: "Show Rabbit"
          }
        ],
        spotCheck: "👀 Look: Do you have Tobi on the left and Rabbit on the right?",
        funTip: "Rabbit and Tobi are best friends!"
      },
      {
        id: 2,
        title: "Make Tobi Walk Towards Rabbit",
        actionText: "In Tobi's code: 'when Green Flag clicked' -> 'Move Right 5' -> 'End'.",
        narration: "On Tobi, code him to walk 5 steps to the right when the Green Flag is clicked.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 5
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi walk forward and bump right into Rabbit?",
        funTip: "BUMP! They touch noses!",
        simulationAction: {
          type: 'move_right',
          value: 4
        }
      },
      {
        id: 3,
        title: "Code Rabbit's Bump Reaction",
        actionText: "Click on Rabbit! From yellow Triggers, snap the 'Start on Bump' block (two figures bumping together).",
        narration: "Click on Rabbit! From the yellow bar, drag the Start on Bump block.",
        blocks: [
          {
            category: "trigger",
            name: "bump",
            iconName: "bump",
            label: "Start on Bump"
          }
        ],
        spotCheck: "👀 Look: Does Rabbit's starting block show two characters bumping?",
        funTip: "Rabbit is waiting for a friendly bump!"
      },
      {
        id: 4,
        title: "Rabbit Hops and Greets Tobi!",
        actionText: "In Rabbit's code, snap 'Hop 2' -> 'Say Hello Tobi!' -> 'Red End'.",
        narration: "In Rabbit's code, snap Hop 2, Say Hello Tobi, and the red Stop block.",
        blocks: [
          {
            category: "trigger",
            name: "bump",
            iconName: "bump",
            label: "Start on Bump"
          },
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          },
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say Hello",
            value: "Hello Tobi!"
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Does Tobi walk, bump Rabbit, and does Rabbit hop and greet Tobi?",
        funTip: "Two characters talking to each other through code!",
        simulationAction: {
          type: 'hop',
          value: 2
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Missed Bump",
      story: "Sam's Tobi only walked 2 steps and stopped too far away. Rabbit never reacted because they didn't touch!",
      narration: "Oopsie Detective! Sam's Tobi stopped too far away and never touched Rabbit! How many steps does Tobi need to reach Rabbit?",
      buggyBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "motion",
          name: "right",
          iconName: "right",
          label: "Move Right",
          value: 1
        }
      ],
      clue: "Characters must physically touch for the Bump block to fire! Increase the Move Right number.",
      howToFix: "Change Tobi's Move Right number from 1 to 5 so he walks all the way to Rabbit.",
      fixedBlocks: [
        {
          category: "trigger",
          name: "flag",
          iconName: "flag",
          label: "Start on Green Flag"
        },
        {
          category: "motion",
          name: "right",
          iconName: "right",
          label: "Move Right",
          value: 5
        }
      ]
    },
    superStar: {
      title: "Super Star: Double Cheer!",
      stars: 4,
      description: "Code Tobi to have his own Bump block too so when they bump, BOTH Tobi and Rabbit jump at the exact same time!",
      easyHint: "Give Tobi a yellow Bump block with a Hop block!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Design, write and debug programs; understand input events triggered by physical touch between objects.",
      lessonPacing: {
        circleTime: "5 mins: Bump high-five game! Two volunteers walk towards each other, bump knuckles, and say cheer.",
        tobiDemo: "10 mins: Demonstrate the yellow Bump block and how two characters interact.",
        handsOnRibbon: "20 mins: Children code Tobi and Rabbit's friendly meeting.",
        carnivalShowcase: "5 mins: Best friends showcase: see different animals bump and greet.",
        tidyAndCelebrate: "5 mins: Award the Friendship Builder badge."
      },
      juniorBlocksTips: "Make sure children remember which character they are coding by looking at the highlighted character on the left pane.",
      littleOopsiesToWatch: [
        "Pupils coding the bump block on Tobi instead of Rabbit.",
        "Characters placed too close together."
      ],
      encouragementWords: "Tell pupils: 'You just coded multiple characters interacting together! You are making real animated movies!'"
    }
  },
  {
    week: 9,
    title: "Fast or Slow?",
    themeTagline: "Change speeds from turtle to rabbit and create endless animation loops!",
    badge: {
      name: "Speed Racer",
      icon: "🐇",
      description: "Mastered Speed controls (Slow, Medium, Fast) and Forever Repeat blocks!"
    },
    tobiMood: "Zooming Fast Tobi",
    tobiEmoji: "🏎️🐻",
    bigIdeaForKids: "The Speed block changes how fast characters move—slow like a snail, medium like walking, or fast like a zooming rabbit! The Red Forever block repeats endlessly!",
    bigIdeaNarration: "The Speed block changes how fast characters move! Slow like a snail, medium like walking, or fast like a zooming rabbit! The Red Forever block repeats forever!",
    steps: [
      {
        id: 1,
        title: "Pick the Racetrack Backdrop",
        actionText: "Pick a Racetrack or Road backdrop and put Tobi at the start line.",
        narration: "Pick the Racetrack backdrop and put Tobi at the start line.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          }
        ],
        spotCheck: "👀 Look: Is Tobi ready at the starting line of the race?",
        funTip: "Ready, set, GO!"
      },
      {
        id: 2,
        title: "Set Speed to ZOOMING Rabbit!",
        actionText: "From orange Control, drag the 'Speed' block. Click the icon to pick the fast running Rabbit!",
        narration: "From the orange bar, drag the Speed block and pick the fast running rabbit icon.",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "control",
            name: "speed",
            iconName: "speed",
            label: "Fast Speed (Rabbit)",
            value: "Fast"
          }
        ],
        spotCheck: "👀 Look: Does your block show the running rabbit icon?",
        funTip: "Rabbit speed makes Tobi sprint like lightning!",
        simulationAction: {
          type: 'move_right',
          value: 4
        }
      },
      {
        id: 3,
        title: "Sprint Across the Track!",
        actionText: "From blue Motion, snap 'Move Right 4' and 'Hop 2'.",
        narration: "Snap Move Right 4 and Hop 2 to zoom across the track.",
        blocks: [
          {
            category: "control",
            name: "speed",
            iconName: "speed",
            label: "Fast Speed",
            value: "Fast"
          },
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 4
          },
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          }
        ],
        spotCheck: "👀 Test it: Click Green Flag. Notice how fast Tobi sprints compared to before?",
        funTip: "Zoom! He is flying across the screen!",
        simulationAction: {
          type: 'move_right',
          value: 4
        }
      },
      {
        id: 4,
        title: "The Red Forever Looping Block",
        actionText: "From the red End bar, choose the 'Repeat Forever' block (the looping circular arrow).",
        narration: "From the red bar, pick the Repeat Forever block so the race never stops!",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "control",
            name: "speed",
            iconName: "speed",
            label: "Fast Speed",
            value: "Fast"
          },
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 4
          },
          {
            category: "end",
            name: "forever",
            iconName: "forever",
            label: "Repeat Forever"
          }
        ],
        spotCheck: "👀 Test it: Does Tobi keep zooming continuously in an endless race until you click Red Stop?",
        funTip: "Endless running arcade action!",
        simulationAction: {
          type: 'move_right',
          value: 4
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Sleepy Snail",
      story: "Liam wanted Tobi to sprint like a sports car, but Tobi moved so slowly he looked like a frozen snail!",
      narration: "Oopsie Detective! Liam wanted Tobi to sprint, but Tobi crawled like a sleepy snail! Which speed icon was selected by mistake?",
      buggyBlocks: [
        {
          category: "control",
          name: "speed",
          iconName: "speed",
          label: "Slow Speed (Snail)",
          value: "Slow"
        },
        {
          category: "motion",
          name: "right",
          iconName: "right",
          label: "Move Right",
          value: 4
        }
      ],
      clue: "Check the speed icon: is it the snail, the walking person, or the fast rabbit?",
      howToFix: "Tap the speed block and select the fast running Rabbit icon.",
      fixedBlocks: [
        {
          category: "control",
          name: "speed",
          iconName: "speed",
          label: "Fast Speed (Rabbit)",
          value: "Fast"
        },
        {
          category: "motion",
          name: "right",
          iconName: "right",
          label: "Move Right",
          value: 4
        }
      ]
    },
    superStar: {
      title: "Super Star: Snail vs Rabbit Race!",
      stars: 5,
      description: "Add a second character (a Snail). Code Tobi with Rabbit speed and code Snail with Snail speed to see the ultimate race!",
      easyHint: "Give both characters the Green Flag, but give them different Speed blocks!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Work with variables and parameters (speed values); understand infinite loops in software.",
      lessonPacing: {
        circleTime: "5 mins: Snail crawl vs Rabbit sprint warm-up. Move in slow motion, then zoom!",
        tobiDemo: "10 mins: Demonstrate the Speed selector and the red Forever loop block.",
        handsOnRibbon: "20 mins: Children code the great racetrack championship.",
        carnivalShowcase: "5 mins: Race day! Who wins the Grand Prix?",
        tidyAndCelebrate: "5 mins: Award the Speed Racer badge."
      },
      juniorBlocksTips: "Explain that the Red Forever block is like a toy train on a circular track that keeps going around.",
      littleOopsiesToWatch: [
        "Pupils forgetting to press the red Stop sign when they want to pause their forever loop."
      ],
      encouragementWords: "Tell pupils: 'You just programmed real game physics and velocity! True Coding Masters!'"
    }
  },
  {
    week: 10,
    title: "Coding Master Carnival & Graduation!",
    themeTagline: "Celebrate 10 weeks of Junior Blocks and claim your official certificate!",
    badge: {
      name: "Grand Junior Master",
      icon: "👑",
      description: "Graduated the 10-Week KS1 PictoBlox Junior Blocks Course by Shazia Alam!"
    },
    tobiMood: "Proud Graduate Tobi",
    tobiEmoji: "🎓🐻",
    bigIdeaForKids: "You are now a certified Coding Master! You know how to make characters walk, hop, climb, grow, shrink, hide, speak, bump, and loop!",
    bigIdeaNarration: "Congratulations young programmer! You are now an official Coding Master! You know how to make characters walk, hop, climb, grow, shrink, hide, speak, bump, and loop in Junior Blocks!",
    steps: [
      {
        id: 1,
        title: "Build Your Masterpiece Carnival Show",
        actionText: "Pick your favorite backdrop: Carnival, Castle, or Jungle. Combine all your favorite blocks into one grand show!",
        narration: "Pick your favorite backdrop and combine all your favorite blocks into one grand carnival show!",
        blocks: [
          {
            category: "trigger",
            name: "flag",
            iconName: "flag",
            label: "Start on Green Flag"
          },
          {
            category: "motion",
            name: "right",
            iconName: "right",
            label: "Move Right",
            value: 2
          },
          {
            category: "motion",
            name: "hop",
            iconName: "hop",
            label: "Hop",
            value: 2
          },
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say Hooray",
            value: "I am a Coding Master!"
          },
          {
            category: "end",
            name: "end",
            iconName: "end",
            label: "End"
          }
        ],
        spotCheck: "👀 Look: Does your carnival project showcase hops, moves, and sounds?",
        funTip: "This is your very own animated movie!",
        simulationAction: {
          type: 'hop',
          value: 3
        }
      },
      {
        id: 2,
        title: "Full Screen Presentation Mode",
        actionText: "Click the blue Presentation button in the top bar to make your game fill the entire screen like a cinema!",
        narration: "Click the presentation button at the top to make your game fill the screen like a cinema!",
        blocks: [
          {
            category: "sound",
            name: "pop",
            iconName: "pop",
            label: "Pop Sound"
          }
        ],
        spotCheck: "👀 Look: Is your game playing on the big screen?",
        funTip: "Grab your popcorn—it's movie premiere time!"
      },
      {
        id: 3,
        title: "The Carnival Walkabout",
        actionText: "Walk around the classroom. Tap and watch games made by your fellow classmates! Give high-fives and cheers.",
        narration: "Walk around the classroom to play and watch games made by your friends. Give high-fives and cheers!",
        blocks: [
          {
            category: "looks",
            name: "say",
            iconName: "say",
            label: "Say High Five",
            value: "High Five, Friend!"
          }
        ],
        spotCheck: "👀 Celebration: Have you played at least 2 other classmate games?",
        funTip: "Everyone in class is now a Coding Master!"
      },
      {
        id: 4,
        title: "Claim Your Graduation Certificate!",
        narration: "Open the Certificate generator in this app. Type your name and print your official Coding Master Certificate by Shazia Alam!",
        actionText: "Click the purple 'Certificate' button at the top. Type your name, click 'Print Certificate', and celebrate with confetti!",
        blocks: [
          {
            category: "sound",
            name: "pop",
            iconName: "pop",
            label: "Celebration Fanfare"
          }
        ],
        spotCheck: "👀 Celebration: Did you receive your official Coding Master Certificate?",
        funTip: "Take your certificate home and hang it proudly on your bedroom wall!",
        simulationAction: {
          type: 'say',
          value: 1
        }
      }
    ],
    oopsie: {
      title: "Oopsie Detective: The Missing Credit",
      story: "Alex built an incredible 10-block carnival, but forgot who taught him all the magic blocks!",
      narration: "Oopsie Detective! Alex made an amazing carnival, but forgot who created the wonderful curriculum! Who created the Coding Master course?",
      buggyBlocks: [
        {
          category: "looks",
          name: "say",
          iconName: "say",
          label: "Say Mystery",
          value: "Mystery Teacher?"
        }
      ],
      clue: "Look at the top of the app banner and certificate!",
      howToFix: "Give a big cheer for curriculum creator Shazia Alam!",
      fixedBlocks: [
        {
          category: "looks",
          name: "say",
          iconName: "say",
          label: "Thank You Shazia Alam!",
          value: "Thank you Shazia Alam!"
        }
      ]
    },
    superStar: {
      title: "Super Star: Coding Master for Life!",
      stars: 5,
      description: "Teach one Junior Block trick to someone at home (like mom, dad, or your brother or sister)!",
      easyHint: "When you teach someone else how to code, you become a true Master!"
    },
    teacherGuide: {
      curriculumCreator: "Shazia Alam",
      ks1ComputingTarget: "National Curriculum KS1: Celebrate computing achievements; evaluate work critically; understand foundational programming concepts.",
      lessonPacing: {
        circleTime: "5 mins: Welcome parents/headteacher if attending. Celebrate 10 weeks of learning.",
        tobiDemo: "5 mins: Set up arcade floor: cinema mode on all screens.",
        handsOnRibbon: "20 mins: Carnival play-around: children play each other's games.",
        carnivalShowcase: "10 mins: Presentation of official 'Coding Master' Certificates created by Shazia Alam.",
        tidyAndCelebrate: "5 mins: Group photo with certificates and final celebration applause!"
      },
      juniorBlocksTips: "Pre-print certificates on cardstock paper or print them live using the app's Certificate button.",
      littleOopsiesToWatch: [
        "Misspelling a child's name on certificate (verify with class register)."
      ],
      encouragementWords: "Say: 'Congratulations! You completed the 10-Week Coding Master Junior Blocks course created by Shazia Alam. You are now official Coding Masters!'"
    }
  }
];
