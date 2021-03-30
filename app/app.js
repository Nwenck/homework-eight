var userVarName = "Variable";
var homeContent = `<div class="home">
<h1>HOME</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa at id provident cupiditate animi in dolores possimus aliquid unde, voluptas totam ullam deserunt, fuga tenetur ipsam! Deleniti quas beatae at ducimus pariatur ratione aperiam distinctio tenetur ea quae nesciunt, fugiat esse fuga ab impedit voluptatum, explicabo, dolorem deserunt! Iste nemo recusandae quidem, obcaecati sequi repudiandae aspernatur natus placeat quis debitis! Maxime quod repellendus ea aperiam eligendi cupiditate, eius esse officiis? Aut veritatis earum tempore eius totam minus distinctio modi sit perspiciatis saepe repellendus, molestiae repudiandae cum voluptates quo blanditiis sint maiores ex amet obcaecati eveniet consequuntur quia dolorum aspernatur. Quibusdam commodi officia dolore eaque consequatur repellat tempore omnis sed ad. Dicta quae quam omnis quod odio maiores, quidem libero, nemo ipsum, doloribus nostrum maxime consequatur soluta aliquam laboriosam debitis sed totam dolores adipisci unde sapiente fugit accusamus possimus? Possimus consequatur eius rerum dolor quaerat, debitis similique dolorem aliquam iure commodi? Tempora accusamus quasi neque cupiditate doloremque, voluptas repellendus delectus temporibus dolores, ipsam libero? Laborum ea iusto porro minus iste temporibus praesentium, suscipit velit iure earum! Et non neque aut veniam ducimus nesciunt nobis dolor corporis asperiores in? Delectus dolore similique perspiciatis nihil tempora totam sed doloribus architecto! Voluptatem nesciunt blanditiis reiciendis nemo fugiat voluptates corrupti numquam eveniet aspernatur. Libero, eligendi. Soluta sint quasi sit iure tempora exercitationem dolor repudiandae, dolorem dignissimos quisquam at neque? Tempore, asperiores quaerat ab itaque pariatur molestias perspiciatis deserunt voluptates mollitia assumenda quam perferendis officiis at sit fugiat earum tenetur. Natus consequuntur enim dolores inventore reiciendis quo minima, molestiae voluptatem aperiam, placeat eveniet illo fugiat, quae aut nobis pariatur dignissimos in nesciunt optio necessitatibus possimus! Voluptatibus dignissimos sequi doloribus a deleniti ut sit nemo repellendus perferendis fugiat illum unde saepe commodi aperiam natus asperiores atque cum, necessitatibus exercitationem.</p>
<div class="homeImage">

</div>
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