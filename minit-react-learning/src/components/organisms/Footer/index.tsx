import React from "react";
import SelectInput from "../../molecules/Selectinput";
import Button from "../../atoms/MiniteButton";




interface SelectOption {
    value: string;
    label: string;
  }
  
  
const options: SelectOption[] = [
    { value: "Engilsh", label: "English" },
    { value: "Telugu", label: "telugu" },
    { value: "French", label: "French 3" }
  ];

  const handleNeedHelp = () => {
    console.log("Need help");
    alert('Need help');
  };

  
  const Footer: React.FC = () => {
    return (
      <div>
        
        <SelectInput options={options} />
        <Button onClick={handleNeedHelp} children='Need Help' variant={"contained"} size={"small"}/>
      </div>
    );
  };
  
  export default Footer;