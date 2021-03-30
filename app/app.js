var userVarName = "Variable";
var homeContent = `<div class="home">
<h1>HOME</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus asperiores voluptates, ad, dicta earum reiciendis qui aut tenetur vitae quia recusandae adipisci. Doloremque reprehenderit, nobis fuga id corrupti, qui magni ipsum nostrum, explicabo voluptatum excepturi non quia optio. Ab cum dolorem quo eveniet ullam nulla, perferendis molestias, quia pariatur facilis praesentium aliquid rem culpa quibusdam. Vitae eos id quo labore! Eligendi, dolore! Unde hic veritatis laborum neque fugiat consequatur quos eum deserunt quibusdam iusto! In porro sequi et pariatur saepe possimus nisi temporibus libero, laborum nesciunt, architecto mollitia doloremque, neque excepturi! Esse assumenda ex ea reprehenderit animi at illum.</p>
</div>`;
var aboutContent = `<div class="about">
<h1>ABOUT</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus asperiores voluptates, ad, dicta earum reiciendis qui aut tenetur vitae quia recusandae adipisci. Doloremque reprehenderit, nobis fuga id corrupti, qui magni ipsum nostrum, explicabo voluptatum excepturi non quia optio. Ab cum dolorem quo eveniet ullam nulla, perferendis molestias, quia pariatur facilis praesentium aliquid rem culpa quibusdam. Vitae eos id quo labore! Eligendi, dolore! Unde hic veritatis laborum neque fugiat consequatur quos eum deserunt quibusdam iusto! In porro sequi et pariatur saepe possimus nisi temporibus libero, laborum nesciunt, architecto mollitia doloremque, neque excepturi! Esse assumenda ex ea reprehenderit animi at illum.</p>
</div>`;
var productsContent = `<div class="products">
<h1>PRODUCTS</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus asperiores voluptates, ad, dicta earum reiciendis qui aut tenetur vitae quia recusandae adipisci. Doloremque reprehenderit, nobis fuga id corrupti, qui magni ipsum nostrum, explicabo voluptatum excepturi non quia optio. Ab cum dolorem quo eveniet ullam nulla, perferendis molestias, quia pariatur facilis praesentium aliquid rem culpa quibusdam. Vitae eos id quo labore! Eligendi, dolore! Unde hic veritatis laborum neque fugiat consequatur quos eum deserunt quibusdam iusto! In porro sequi et pariatur saepe possimus nisi temporibus libero, laborum nesciunt, architecto mollitia doloremque, neque excepturi! Esse assumenda ex ea reprehenderit animi at illum.</p>
</div>`;
var contactContent = `<div class="contact">
<h1>CONTACT</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus asperiores voluptates, ad, dicta earum reiciendis qui aut tenetur vitae quia recusandae adipisci. Doloremque reprehenderit, nobis fuga id corrupti, qui magni ipsum nostrum, explicabo voluptatum excepturi non quia optio. Ab cum dolorem quo eveniet ullam nulla, perferendis molestias, quia pariatur facilis praesentium aliquid rem culpa quibusdam. Vitae eos id quo labore! Eligendi, dolore! Unde hic veritatis laborum neque fugiat consequatur quos eum deserunt quibusdam iusto! In porro sequi et pariatur saepe possimus nisi temporibus libero, laborum nesciunt, architecto mollitia doloremque, neque excepturi! Esse assumenda ex ea reprehenderit animi at illum.</p>
</div>`;


// this is an example of a named function
function init(){
// this is where the instructions go
// This is a click listener that will get the link id
$("nav a").click(function(e){
    // let btnId = e.currentTarget.id
    // let btnId = e.currentTarget.id
    let btnId = this.id;
    let contentID = btnId + "Content";

    $("#app").html(eval(contentID));
    // $("#app").append(btnId);
    // $("#app").prepend(contentID);
});
}

// this checks for all the elements to be read by the browser
$(document).ready(function(){
    init();
 })