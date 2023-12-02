import "./All_buttons.css";

 const Banner_btn = ({ text, OpenScheduleDemo }) => {
   return (
     <button className="banner_btns" onClick={() => OpenScheduleDemo(true)}>
      { text }
     </button>
   )
}

export { Banner_btn };