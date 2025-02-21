(function () {
    document.addEventListener("DOMContentLoaded", function() {
        fetch('assets/snippets/header.html')
        .then(function (response) {
                // When the page is loaded convert it to text
                return response.text()
            })
                .then(function (html) {
                    // Initialize the DOM parser
                    const parser = new DOMParser();

                    // Parse the text
                    const doc = parser.parseFromString(html, "text/html");

                    // You can now even select part of that html as you would in the regular DOM
                    // Example:
                    const docArticle = doc.querySelector('header').innerHTML;

                    console.log(doc);
                    document.getElementById("header").innerHTML = docArticle
                })
                .catch(function (err) {
                    console.log('Failed to fetch page: ', err);
                });


        fetch('assets/snippets/footer.html')
        .then(function (response) {
                // When the page is loaded convert it to text
                return response.text()
            })
                .then(function (html) {
                    // Initialize the DOM parser
                    const parser = new DOMParser();

                    // Parse the text
                    const doc = parser.parseFromString(html, "text/html");

                    // You can now even select part of that html as you would in the regular DOM
                    // Example:
                    const docArticle = doc.querySelector('footer').innerHTML;

                    console.log(doc);
                    document.getElementById("footer").innerHTML = docArticle
                })
                .catch(function (err) {
                    console.log('Failed to fetch page: ', err);
                });


        loadDoc();
    });

    function loadDoc() {
        let data = {};

        function getJSON(path, callback) {

            let xhr = new XMLHttpRequest();                                         //Instantiate new request

            xhr.open('GET', path, true);                                            //prepare asynch GET request
            xhr.send();                                                             //send request

            xhr.onreadystatechange = function () {                                    //everytime ready state changes (0-4), check it
                if (xhr.readyState === 4) {                                         //if request finished & response ready (4)
                    if (xhr.status === 0 || xhr.status === 200) {                   //then if status OK (local file || server)
                        let data = JSON.parse(xhr.responseText);                    //parse the returned JSON string
                        if (callback) {
                            callback(data);
                        }
                    }
                }
            };
        }
        /////////////////////////////////////////////////////////
        // Switched out dogs with dogs-alt for square thumbnails
        /////////////////////////////////////////////////////////
        // switch out dog.thumb for dog.image if using dog.json

        // getJSON('assets/data/dogs.json', function(data){
        getJSON('assets/data/dogs-alt.json', function (data) {
            // console.log(data.dogs);
            data = data.dogs;
            // console.log(data);

            let output = data.map((dog, index) => {
                // console.log(dog.image);
                return `
                    <img id="dog-${index}" 
                    data-location="${dog.image}" 
                    src="${dog.thumb}"
                    alt="thumbnail images of puppy dogs for adoption"/>
                `;
            }).join('');

            // document.querySelector('#dogList').innerHTML = output;
            let addToList = document.createElement("div");
            addToList.innerHTML = output;
            console.log(addToList);
            document.querySelector('#dogList').appendChild(addToList);

            /////////////////////////////////////////////////////////
            // Mock Infinite Scroll
            /////////////////////////////////////////////////////////

            // if AJAX call was RESTFUL, would implement call to get say 20 dog objects at a time
            // uncomment this section if you want to simulate it.
            // let additionalOutput = output;

            // document.addEventListener("scroll", function (event) {
            //     checkForNewItems();
            // });

            // let checkForNewItems = function() {
            //     let lastDiv = document.querySelector("#dogList > div:last-child");
            //     let lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
            //     let pageOffset = window.pageYOffset + window.innerHeight;

            //     if(pageOffset > lastDivOffset - 20) {
            //         let newDiv = document.createElement("div");
            //         newDiv.innerHTML = additionalOutput;
            //         document.getElementById("dogList").appendChild(newDiv);
            //         checkForNewItems();
            //     }
            // };
        });

        let modal = document.getElementById("modalImageContainer");
        let closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", toggleModal, false);

        function toggleModal() {
            modal.classList.toggle("show-modal");
        }

        let theParent = document.querySelector("#dogList");
        theParent.addEventListener("click", showLargeImage, false);

        function showLargeImage(e) {
            if (e.target !== e.currentTarget && e.target.nodeName === 'IMG') {
                //let clickedItem = e.target.id;
                let clickedItem = e.target.getAttribute("data-location");
                let clickedItemIndex = e.target.getAttribute("id");

                // alert("Hello " + clickedItem);
                // alert("Hello " + clickedItemIndex);

                document.getElementById("modalImage").setAttribute('src', clickedItem);

                toggleModal();
            }
            e.stopPropagation();
        }
    }

})();

