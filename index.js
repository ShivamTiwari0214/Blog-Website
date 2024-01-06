// js hint : esversion 6
const express = require("express");
const ejs = require("ejs");
const _= require('lodash');


const app = express();
let Data = [
  {
    title: "Home",
    para:"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione laboriosam ipsum debitis officiis necessitatibus nobis exercitationem. Necessitatibus aspernatur, esse exercitationem numquam perferendis accusantium quaerat soluta iusto sit explicabo repellendus est voluptates reprehenderit recusandae eveniet totam delectus ipsam quasi quidem facere dolores inventore officiis. Aperiam minima odit assumenda itaque minus veritatis illum iure qui voluptatibus ipsam temporibus corporis incidunt, doloribus iusto veniam nostrum autem illo dignissimos! Pariatur voluptate corrupti laboriosam cum minima deserunt ex exercitationem quod harum ipsa amet nesciunt, quisquam ducimus, eligendi tenetur nobis doloribus quae porro dolores enim nemo odit fugit dolore! Explicabo adipisci quibusdam reiciendis ut cupiditate ipsa quisquam corporis aliquid dolor placeat nesciunt, vero voluptatem error. Vero quod odit repudiandae excepturi quidem doloremque, accusantium, necessitatibus beatae numquam aliquam harum. Fugiat autem, perferendis sit doloribus doloremque vitae eaque eius ea impedit, excepturi veritatis ex dolores repellendus ipsum itaque ipsam sapiente, error nostrum non? Aliquam laborum voluptatem tempore quisquam animi, reprehenderit sit aliquid nisi autem cum velit delectus! Quae nihil, vel ullam nesciunt in sed placeat molestias corrupti fugit veritatis saepe soluta sint repellat beatae modi ab dignissimos aliquam! Laudantium aut quos dolore sit blanditiis hic quidem, sed debitis delectus voluptas consectetur, sequi commodi, harum non beatae omnis veritatis deserunt in. Officia est deserunt molestiae excepturi, doloribus a voluptate! Dolorum dignissimos ab earum saepe tenetur. Sequi, modi beatae, rem in quae tempora, odit repellat laborum quidem minus nostrum magnam quas cupiditate alias eligendi odio molestiae? Quos, delectus dolorem rerum odit repellendus eaque repellat excepturi, illum quaerat temporibus, reprehenderit facere est adipisci aliquid dicta magni culpa optio amet quibusdam. Minus nobis reiciendis magni laudantium, odit maxime voluptatum, impedit iure vitae aliquam quos minima officiis asperiores neque voluptatibus animi blanditiis inventore quam suscipit dignissimos eveniet molestiae reprehenderit? Enim possimus fugit consectetur sunt perferendis, odio iste excepturi cupiditate eveniet illum vero qui eaque voluptatum itaque voluptates ipsum fuga magnam dolorem praesentium expedita blanditiis quis quibusdam? Alias placeat illo molestiae vel! Repudiandae at nesciunt aliquam, expedita rerum facilis enim! Unde consequatur, rem soluta molestiae eaque vero aliquid nulla ipsa nesciunt similique beatae officiis commodi ratione sequi nam dicta minus optio quod cumque omnis inventore non. Tempora, illo fugiat. Corrupti, perspiciatis nam. Harum natus optio voluptas, facere expedita officia quas quae maxime error delectus voluptates aliquam sapiente molestias nesciunt in sit, ullam voluptatum sed fuga praesentium ducimus beatae rem. Omnis mollitia numquam quidem vel ipsa nemo, quam esse error repellat et. Exercitationem similique quae eveniet atque cupiditate distinctio facere quasi voluptatibus blanditiis, earum voluptate soluta dolorum perspiciatis minima debitis sapiente ad labore, unde corrupti quas! Suscipit fugit consectetur error quam laboriosam incidunt laborum aliquam provident porro labore! Exercitationem praesentium ab provident, quaerat beatae sapiente fugiat possimus fuga, optio rerum dolorem eaque ea ad numquam ut commodi, accusantium eum? Reprehenderit est odit ex, cum pariatur qui deleniti magni consectetur labore minus aut, dolores suscipit eos non tempora quis quo esse dolorem atque ratione explicabo voluptates! Culpa voluptatum perspiciatis eos rem nostrum assumenda. At doloremque rem, minima in architecto atque. Deleniti minus maxime harum officiis neque, esse, iusto amet impedit accusantium asperiores facere earum voluptatem? Modi, in sed quisquam quod beatae facere asperiores consectetur qui aperiam eos nostrum quam libero error vitae provident, laborum non voluptatum esse deserunt quis laudantium, necessitatibus nisi rem illo! Dolore dignissimos dolorem veritatis aliquid quo, iusto nihil. Aliquid, soluta. Iste quis quae impedit veniam quasi error natus iusto recusandae dignissimos, eaque reprehenderit molestias magni excepturi sunt debitis veritatis harum omnis velit suscipit eligendi nostrum. Eveniet natus praesentium inventore perferendis delectus aspernatur sunt totam. Excepturi necessitatibus mollitia esse eos vel, sed fuga consequuntur maxime accusamus commodi perferendis reprehenderit provident rerum iure porro perspiciatis ullam quae soluta eveniet maiores quam corrupti ratione libero aperiam! Velit, quisquam aperiam. Earum, assumenda corrupti cupiditate enim mollitia voluptates deleniti iure itaque nostrum ut sapiente, quam, aperiam quibusdam doloremque ipsam pariatur ducimus? Minima voluptatibus magnam quidem eaque placeat voluptates ex consequatur neque architecto, veniam, eos quas! Similique eius optio illo reprehenderit? Voluptate sit beatae ad animi dolore sapiente. Quia dolorem voluptatum inventore vitae, nisi iure libero, harum quaerat eos doloremque vel quis reiciendis excepturi doloribus delectus praesentium magnam similique. Explicabo molestiae corrupti voluptatem neque quod animi, voluptatibus assumenda amet. Eum quam harum repudiandae doloribus nisi totam quibusdam atque? Error necessitatibus inventore minus? Non animi et quia illo alias, voluptate accusamus consequuntur earum possimus magnam ab modi eveniet veniam ipsam fugiat vel. Quas neque et natus tempora repellendus, ipsum recusandae. Nisi ab ipsa, omnis, deserunt, laudantium aspernatur in veniam possimus sed animi enim pariatur quas. Maiores, obcaecati amet id magni ut debitis rem animi quam velit necessitatibus ab minus possimus ullam commodi deserunt. Illo quidem et pariatur unde, illum fugiat animi provident temporibus sint, mollitia esse. Sit eos accusantium rerum quasi qui molestiae maxime animi eveniet cumque magnam? Corporis accusantium optio culpa nisi distinctio fugit similique quo quam eius expedita, quod qui odio, architecto pariatur repellendus error nostrum repellat placeat? Aspernatur neque excepturi atque veniam voluptate voluptatum, praesentium perspiciatis maxime, fugiat modi ab itaque exercitationem repellendus voluptatibus et asperiores tempore harum voluptates maiores! Nulla dolorum nostrum doloribus eveniet earum totam ullam facilis, fugit nisi? Voluptate vitae quod ipsam, doloremque non obcaecati assumenda hic corporis similique totam libero quam perferendis cupiditate eius minus aperiam, odio soluta voluptatum. Molestiae, minima nobis odio tenetur quas nostrum libero quisquam corrupti repellendus maxime perspiciatis fugiat, nihil optio quasi fuga facilis. Maxime molestias ipsum consectetur quam recusandae nobis hic voluptatem ab commodi autem dolorem, nihil mollitia explicabo quos minus totam rem libero. Modi, esse est. Consequatur vitae recusandae culpa placeat accusamus tempore in quisquam ab! Expedita, voluptates qui, id laborum commodi repellat quibusdam optio tempore autem vero ducimus? At hic eum alias? Libero, dolore enim. Consequuntur odit aliquid qui facilis aperiam. Quas recusandae odio ipsam. Ducimus aperiam nostrum officiis earum voluptatum, nesciunt dolorum libero soluta? Eveniet blanditiis consectetur neque eligendi illo nam, iste repellendus inventore harum qui amet dolor reprehenderit officia unde officiis consequuntur, corrupti, quas voluptatum obcaecati dicta ut optio aliquam? Maxime, perspiciatis sunt? Quisquam adipisci provident autem optio quibusdam assumenda praesentium dicta.",
    troute:"Home"
  },
  {
    title: "Day-1",
    para:"Paragraph of text beneath Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione laboriosam ipsum debitis officiis necessitatibus nobis exercitationem. Necessitatibus aspernatur, esse exercitationem numquam perferendis accusantium quaerat soluta iusto sit explicabo repellendus est voluptates reprehenderit recusandae eveniet totam delectus ipsam quasi quidem facere dolores inventore officiis. Aperiam minima odit assumenda itaque minus veritatis illum iure qui voluptatibus ipsam temporibus corporis incidunt, doloribus iusto veniam nostrum autem illo dignissimos! Pariatur voluptate corrupti laboriosam cum minima deserunt ex exercitationem quod harum ipsa amet nesciunt, quisquam ducimus, eligendi tenetur nobis doloribus quae porro dolores enim nemo odit fugit dolore! Explicabo adipisci quibusdam reiciendis ut cupiditate ipsa quisquam corporis aliquid dolor placeat nesciunt, vero voluptatem error. Vero quod odit repudiandae excepturi quidem doloremque, accusantium, necessitatibus beatae numquam aliquam harum. Fugiat autem, perferendis sit doloribus doloremque vitae eaque eius ea impedit, excepturi veritatis ex dolores repellendus ipsum itaque ipsam sapiente, error nostrum non? Aliquam laborum voluptatem tempore quisquam animi, reprehenderit sit aliquid nisi autem cum velit delectus! Quae nihil, vel ullam nesciunt in sed placeat molestias corrupti fugit veritatis saepe soluta sint repellat beatae modi ab dignissimos aliquam! Laudantium aut quos dolore sit blanditiis hic quidem, sed debitis delectus voluptas consectetur, sequi commodi, harum non beatae omnis veritatis deserunt in. Officia est deserunt molestiae excepturi, doloribus a voluptate! Dolorum dignissimos ab earum saepe tenetur. Sequi, modi beatae, rem in quae tempora, odit repellat laborum quidem minus nostrum magnam quas cupiditate alias eligendi odio molestiae? Quos, delectus dolorem rerum odit repellendus eaque repellat excepturi, illum quaerat temporibus, reprehenderit facere est adipisci aliquid dicta magni culpa optio amet quibusdam. Minus nobis reiciendis magni laudantium, odit maxime voluptatum, impedit iure vitae aliquam quos minima officiis asperiores neque voluptatibus animi blanditiis inventore quam suscipit dignissimos eveniet molestiae reprehenderit? Enim possimus fugit consectetur sunt perferendis, odio iste excepturi cupiditate eveniet illum vero qui eaque voluptatum itaque voluptates ipsum fuga magnam dolorem praesentium expedita blanditiis quis quibusdam? Alias placeat illo molestiae vel! Repudiandae at nesciunt aliquam, expedita rerum facilis enim! Unde consequatur, rem soluta molestiae eaque vero aliquid nulla ipsa nesciunt similique beatae officiis commodi ratione sequi nam dicta minus optio quod cumque omnis inventore non. Tempora, illo fugiat. Corrupti, perspiciatis nam. Harum natus optio voluptas, facere expedita officia quas quae maxime error delectus voluptates aliquam sapiente molestias nesciunt in sit, ullam voluptatum sed fuga praesentium ducimus beatae rem. Omnis mollitia numquam quidem vel ipsa nemo, quam esse error repellat et. Exercitationem similique quae eveniet atque cupiditate distinctio facere quasi voluptatibus blanditiis, earum voluptate soluta dolorum perspiciatis minima debitis sapiente ad labore, unde corrupti quas! Suscipit fugit consectetur error quam laboriosam incidunt laborum aliquam provident porro labore! Exercitationem praesentium ab provident, quaerat beatae sapiente fugiat possimus fuga, optio rerum dolorem eaque ea ad numquam ut commodi, accusantium eum? Reprehenderit est odit ex, cum pariatur qui deleniti magni consectetur labore minus aut, dolores suscipit eos non tempora quis quo esse dolorem atque ratione explicabo voluptates! Culpa voluptatum perspiciatis eos rem nostrum assumenda. At doloremque rem, minima in architecto atque. Deleniti minus maxime harum officiis neque, esse, iusto amet impedit accusantium asperiores facere earum voluptatem? Modi, in sed quisquam quod beatae facere asperiores consectetur qui aperiam eos nostrum quam libero error vitae provident, laborum non voluptatum esse deserunt quis laudantium, necessitatibus nisi rem illo! Dolore dignissimos dolorem veritatis aliquid quo, iusto nihil. Aliquid, soluta. Iste quis quae impedit veniam quasi error natus iusto recusandae dignissimos, eaque reprehenderit molestias magni excepturi sunt debitis veritatis harum omnis velit suscipit eligendi nostrum. Eveniet natus praesentium inventore perferendis delectus aspernatur sunt totam. Excepturi necessitatibus mollitia esse eos vel, sed fuga consequuntur maxime accusamus commodi perferendis reprehenderit provident rerum iure porro perspiciatis ullam quae soluta eveniet maiores quam corrupti ratione libero aperiam! Velit, quisquam aperiam. Earum, assumenda corrupti cupiditate enim mollitia voluptates deleniti iure itaque nostrum ut sapiente, quam, aperiam quibusdam doloremque ipsam pariatur ducimus? Minima voluptatibus magnam quidem eaque placeat voluptates ex consequatur neque architecto, veniam, eos quas! Similique eius optio illo reprehenderit? Voluptate sit beatae ad animi dolore sapiente. Quia dolorem voluptatum inventore vitae, nisi iure libero, harum quaerat eos doloremque vel quis reiciendis excepturi doloribus delectus praesentium magnam similique. Explicabo molestiae corrupti voluptatem neque quod animi, voluptatibus assumenda amet. Eum quam harum repudiandae doloribus nisi totam quibusdam atque? Error necessitatibus inventore minus? Non animi et quia illo alias, voluptate accusamus consequuntur earum possimus magnam ab modi eveniet veniam ipsam fugiat vel. Quas neque et natus tempora repellendus, ipsum recusandae. Nisi ab ipsa, omnis, deserunt, laudantium aspernatur in veniam possimus sed animi enim pariatur quas. Maiores, obcaecati amet id magni ut debitis rem animi quam velit necessitatibus ab minus possimus ullam commodi deserunt. Illo quidem et pariatur unde, illum fugiat animi provident temporibus sint, mollitia esse. Sit eos accusantium rerum quasi qui molestiae maxime animi eveniet cumque magnam? Corporis accusantium optio culpa nisi distinctio fugit similique quo quam eius expedita, quod qui odio, architecto pariatur repellendus error nostrum repellat placeat? Aspernatur neque excepturi atque veniam voluptate voluptatum, praesentium perspiciatis maxime, fugiat modi ab itaque exercitationem repellendus voluptatibus et asperiores tempore harum voluptates maiores! Nulla dolorum nostrum doloribus eveniet earum totam ullam facilis, fugit nisi? Voluptate vitae quod ipsam, doloremque non obcaecati assumenda hic corporis similique totam libero quam perferendis cupiditate eius minus aperiam, odio soluta voluptatum. Molestiae, minima nobis odio tenetur quas nostrum libero quisquam corrupti repellendus maxime perspiciatis fugiat, nihil optio quasi fuga facilis. Maxime molestias ipsum consectetur quam recusandae nobis hic voluptatem ab commodi autem dolorem, nihil mollitia explicabo quos minus totam rem libero. Modi, esse est. Consequatur vitae recusandae culpa placeat accusamus tempore in quisquam ab! Expedita, voluptates qui, id laborum commodi repellat quibusdam optio tempore autem vero ducimus? At hic eum alias? Libero, dolore enim. Consequuntur odit aliquid qui facilis aperiam. Quas recusandae odio ipsam. Ducimus aperiam nostrum officiis earum voluptatum, nesciunt dolorum libero soluta? Eveniet blanditiis consectetur neque eligendi illo nam, iste repellendus inventore harum qui amet dolor reprehenderit officia unde officiis consequuntur, corrupti, quas voluptatum obcaecati dicta ut optio aliquam? Maxime, perspiciatis sunt? Quisquam adipisci provident autem optio quibusdam assumenda praesentium dicta. the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
    troute:"Day-1"
  },
];
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let y = 0 ;
app.get("/", (req, res) => {
  res.render("index.ejs", {
    data:Data,
    homeClass: "active",
    AbClass: "",
    CusClass: "",
  });
});


app.get( `/posts/:postName` , ( req , res ) => {
  let i = 0 ;
  Data.forEach( (item)=>{
    if(item.troute == req.params.postName){
      console.log("TRUE");
    console.log(Data[0].troute,Data[1].troute ,Data[y].troute)
    res.render('ReadMoreBlog.ejs',{
    title: Data[i].title,
    para: Data[i].para 
    })
    return ;
    }

      i++;
    })
    res.status(404).send('Post not found');
  
})
app.get("/contactUs", (req, res) => {
  res.render("contactUs.ejs", {
    troute: "new",
    homeClass: "",
    AbClass: "",
    CusClass: "active",
  });
});

app.get("/AboutUs", (req, res) => {
  res.render("AboutUs.ejs", {
    id: "new",
    homeClass: "",
    AbClass: "active",
    CusClass: "",
  });
});

app.get('/compose', ( req , res ) => {
  res.render("compose.ejs", {
    title:Data[y].title,
    troute: Data[y].troute,
    para:Data[y].para.slice(0,150),
    data:Data,
    homeClass: "active",
    AbClass: "",
    CusClass: "",
})
})

app.post('/' , (req,res)=>{
  let route = req.body.inputTitle.replace(' ','');
  
  let newBlog = {
    title: req.body.inputTitle,
    para:req.body.inputData,
    troute: _.kebabCase(route)
  }
  console.log(newBlog.troute)
  Data.push(newBlog) ;
  res.redirect('/') ;
} )

const PORT = process.env.PORT || 3000;

app.listen(PORT);
