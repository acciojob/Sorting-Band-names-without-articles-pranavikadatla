//your code here

 let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

        function stripArticle(name) {
            return name.replace(/^(a |an |the )/i, '').trim();
        }

        touristSpots.sort((a, b) => {
            let nameA = stripArticle(a.toLowerCase());
            let nameB = stripArticle(b.toLowerCase());
            return nameA.localeCompare(nameB);
        });

        let ul = document.getElementById('band');
        touristSpots.forEach(spot => {
            let li = document.createElement('li');
            li.textContent = spot;
            ul.appendChild(li);
        });