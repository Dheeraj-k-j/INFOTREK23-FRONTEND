import React from "react";
import Title from "./Title";
import SubmitButton from "./SubmitButton";

function AboutUs() {
  return (
    <div className="about-wrap">
      <div className="about-div">
        <p className="body-text">
          <span className="line-separator" />
          <Title titleProp={{ title: "ABOUT US" , classes:"scndry-clr"}} />
          <span className='tag-line prmry-clr'>Discover the limitless possibilities at Infotrek: Ignite, Explore, Excel</span>
          <span className="line-separator" />
        </p>
      </div>
      <div className="about-second-div">
          <div className="about-us-description">
           Vitae facere in animi tenetur labore quod cumque perferendis nobis
            corrupti vel iste, doloremque eos expedita aut, laboriosam, nisi ea
            reiciendis laborum sequi a rem? Suscipit, amet odit voluptatibus
            dolore soluta assumenda deserunt a nulla dolorum et corporis quas
            hic maiores sed reiciendis, laudantium exercitationem tenetur fuga
            optio dolores consequuntur architecto est facilis. Possimus,
            assumenda?
          </div>
          <SubmitButton btnProp={{text:"KNOW MORE", classes:"bottom-0 width-long"}}/>
      </div>
    </div>
  );
}

export default AboutUs;
