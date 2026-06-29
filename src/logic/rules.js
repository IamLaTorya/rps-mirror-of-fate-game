// This array lists all possible moves in the game
export const moves = ["stone", "scroll", "shears", "flame", "mirror"];

//Each move has a matching emoji for visual feedback
export const emojis = {
    stone: "🪨",
    scroll: "📜",
    shears: "✂️",
    flame: "🔥",
    mirror: "🪞",
};

// Rules: this object defines which moves each move can defeat
export const rules = {
    stone: ["shears", "flame"],//stone defeats shears & flame
    scroll: ["stone", "mirror"],//scroll defeats stone & mirror
    shears: ["scroll", "flame"],//shears defeats scroll & flame
    flame: ["mirror", "scroll"],//flame defeats mirror & scroll
    mirror: ["shears", "stone"],// mirror defeats shears & stone
};

// Explanation Map — controls all "Why?" modal messages

export const explanationMap = {
    stone: {
        shears: {
            title: "🪨 Stone defeats ✂️ Shears",
            body: "A strong foundation cannot be easily cut apart. Stability outlasts sudden change."
        },
        flame: {
            title: "🪨 Stone defeats 🕯️ Flame",
            body: "Stone endures the heat of the flame. What is firmly grounded is difficult to consume."
        }
    },

    scroll: {
        stone: {
            title: "📜 Scroll defeats 🪨 Stone",
            body: "Wisdom can move mountains. Knowledge finds solutions where strength alone cannot."
        },
        mirror: {
            title: "📜 Scroll defeats 🪞 Mirror",
            body: "Reflection asks questions, but wisdom provides answers. Knowledge brings clarity to what the mirror reveals."
        }
    },

    shears: {
        scroll: {
            title: "✂️ Shears defeat 📜 Scroll",
            body: "Change rewrites old stories. Growth begins by cutting away outdated beliefs."
        },
        flame: {
            title: "✂️ Shears defeat 🕯️ Flame",
            body: "Shears remove what feeds the fire, preventing it from growing beyond control."
        }
    },

    mirror: {
        stone: {
            title: "🪞 Mirror defeats 🪨 Stone",
            body: "Reflection reveals paths around obstacles. Self-awareness overcomes rigid thinking."
        },
        shears: {
            title: "🪞 Mirror defeats ✂️ Shears",
            body: "Thoughtful awareness prevents unnecessary action. Reflection encourages understanding before change."
        }
    },

    flame: {
        mirror: {
            title: "🕯️ Flame defeats 🪞 Mirror",
            body: "Transformation changes what the mirror reflects. Growth creates a new self to be seen."
        },
        scroll: {
            title: "🕯️ Flame defeats 📜 Scroll",
            body: "Fire clears away old ideas to make room for new understanding. Experience transforms knowledge into wisdom."
        }
    }
};

