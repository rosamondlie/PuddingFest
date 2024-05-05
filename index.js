function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
}




const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNaFocwOFh7Gu_Jjfs8WFsdkZ4LjWHc_Q",
    authDomain: "puddingfest-9f30d.firebaseapp.com",
    projectId: "puddingfest-9f30d",
    storageBucket: "puddingfest-9f30d.appspot.com",
    messagingSenderId: "138766887587",
    appId: "1:138766887587:web:328af1405c6c855d9bad16",
    measurementId: "G-QMWEKV4YQ0"
});

const db = firebaseApp.firestore();

const saveData = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telp_num = document.getElementById('telp_num').value;
    const event = document.getElementById('event').value;

    db.collection('audience')
    .add({
        name: name,
        email: email,
        telp_num: telp_num,
        event: event
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((eror) => {
        console.log("Error adding document: ", eror);
    });
}


// let getData = document.getElementById("getData");

// getData.addEventListener("click",()=>{
//     let xhr =new XMLHttpRequest();
//     xhr.open('POST','https://jsonplaceholder.typicode.com/posts', true)

//     xhr.onprogress = function(){
//         console.log("saya lagi proses");
//     }

//     xhr.onreadystatechange = function(){
//         console.log("Ready state di" + xhr.readyState);
//     }

//     xhr.onload = function(){
//         if(this.status === 200){
//             console.log(this.responseText);
//         }
//         else{
//             console.log("Page not found!");
//         }
//     }
//     data = {title:"Ajax"};
//     xhr.send(data);
// })


$(document).ready(function(){
    $('#addData').click(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var telp_num = $('#telp_num').val();
        var event = $('#event').val();

        if(name && email && telp_num && event){
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({userId: name, id: email, title: telp_num, body: event}),
                success: function(response){
                    console.log("Data berhasil ditambahkan ke API!");
                },
                error: function(xhr, status, eror){
                    console.log(error);
                }
            })
        }
        else{
            alert('Tolong isi yang lengkap!');
        }
    })
})

