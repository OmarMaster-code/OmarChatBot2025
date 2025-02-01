document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.getElementById("chatbox");
    const userInput = document.getElementById("message");
    const sendButton = document.getElementById("send");

    const responses = {
        "bonjour": "Bonjour ! Comment puis-je vous aider ? 😊",
        "salut": "Salut ! Que puis-je faire pour toi ?",
        "ça va": "Je suis un bot, donc je vais toujours bien !",
        "comment tu t'appelles": "Je suis un chatbot intelligent !",
        "quel est ton rôle": "Mon rôle est de répondre à tes questions.",
        "quelle est la capitale de la france": "La capitale de la France est Paris.",
        "qui a créé ce chatbot": "C'est toi ! 😉",
        "quelle est la capitale de l'espagne": "La capitale de l'Espagne est Madrid.",
        "quelle est la capitale de l'italie": "La capitale de l'Italie est Rome.",
        "quelle est la capitale de l'allemagne": "La capitale de l'Allemagne est Berlin.",
        "quel est le plus grand pays du monde": "Le plus grand pays du monde est la Russie.",
        "qui a inventé internet": "Internet a été développé par plusieurs scientifiques, mais ARPANET est considéré comme son précurseur.",
        "quel est le plus grand océan": "Le plus grand océan est l'océan Pacifique.",
        "combien de continents y a-t-il": "Il y a 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe et Océanie.",
        "quelle est la planète la plus proche du soleil": "La planète la plus proche du Soleil est Mercure.",
        "quel est l'animal terrestre le plus rapide": "Le guépard est l'animal terrestre le plus rapide avec une vitesse allant jusqu'à 120 km/h.",
        "qui a écrit harry potter": "J.K. Rowling est l'auteure de la saga Harry Potter.",
        "quelle est la monnaie du japon": "La monnaie du Japon est le yen (¥).",
        "quel est le plus haut sommet du monde": "Le plus haut sommet du monde est l'Everest, à 8 849 mètres.",
        "quel est le plus grand désert du monde": "Le plus grand désert du monde est l'Antarctique, suivi du Sahara.",
        "quel est le fleuve le plus long du monde": "Le plus long fleuve est le Nil avec environ 6 650 km.",
        "qui a inventé l'électricité": "L'électricité n'a pas été 'inventée', mais Benjamin Franklin a contribué à son étude.",
        "quel est le sport le plus pratiqué au monde": "Le football est le sport le plus pratiqué au monde.",
        "quel est le plus gros animal du monde": "Le plus gros animal du monde est la baleine bleue.",
        "quel est le pays le plus peuplé": "Le pays le plus peuplé est la Chine, suivie de l'Inde.",
        "quelle est la capitale du canada": "La capitale du Canada est Ottawa.",
        "qui a peint la joconde": "La Joconde a été peinte par Léonard de Vinci.",
        "quel est le métal le plus précieux": "Le rhodium est considéré comme le métal le plus précieux.",
        "quel est l'élément chimique le plus léger": "L'élément chimique le plus léger est l'hydrogène.",
        "quelle est la capitale de l'australie": "La capitale de l'Australie est Canberra.",
        "quelle est la capitale des états-unis": "La capitale des États-Unis est Washington D.C.",
        "quel est le plus grand lac du monde": "Le plus grand lac du monde est la mer Caspienne.",
        "quel est le record du 100m sprint": "Le record du 100m sprint est de 9,58 secondes par Usain Bolt.",
        "quel est le pays avec le plus de volcans": "L'Indonésie possède le plus de volcans actifs au monde.",
        "qui a écrit roméo et juliette": "Roméo et Juliette a été écrit par William Shakespeare.",
        "combien de cœurs a une pieuvre": "Une pieuvre a trois cœurs.",
        "quelle est la température du soleil": "La température de surface du Soleil est d'environ 5 500°C."
    };

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") sendMessage();
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = `<b>${sender}:</b> ${message}`;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function sendMessage() {
        const userMessage = userInput.value.trim().toLowerCase();
        if (userMessage === "") return;

        displayMessage("User", userMessage);
        userInput.value = "";

        let botResponse = responses[userMessage] || "Je ne comprends pas. Pouvez-vous reformuler ?";
        displayMessage("Bot", botResponse);
    }
});
