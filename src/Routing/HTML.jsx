import React from "react";

const HTML = () => {
  const image =
    "https://th.bing.com/th/id/OIP.rNWiroF7NmHQnVxVeHhaqQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
  return (
    <div>
      <h2 style={{textAlign:"center",color:"green"}}>HTML Language</h2>
      <div style={{display:"flex"}}>
        <div>
          <img src={image} width={250} height={250} alt="HtmlImage" />
        </div>
        <div>
          <dl>
            <dt>
              <b>Language</b>
            </dt>
            <dd>HTML</dd>
            <dt>
              <b>Description</b>
            </dt>
            <dd>
              <p>
                Consequatur Repellat molestiae qui maiores ratione, sit
                quia iusto earum modi numquam esse minima commodi tempora
                aspernatur beatae quo odit, harum quam minus facere? Eligendi
                molestiae, doloremque dolorem a labore quas ipsam cum quia
                delectus laborum minus natus nisi aspernatur quaerat accusamus
                officiis repellat aut quos qui dolore similique reiciendis. Sunt
                ad veniam qui tempora est atque reprehenderit! Soluta quisquam
                consectetur porro provident deleniti. Unde tempora natus quo
                autem eligendi nisi excepturi neque culpa. Saepe amet soluta
                facere tempore? porro provident deleniti. Unde tempora natus quo
                autem eligendi nisi excepturi neque culpa. Saepe amet soluta
                facere tempore?
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HTML;
