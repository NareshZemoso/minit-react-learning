import React from "react";
import SelectInput from "../../molecules/selectinput";
import Button from "../../atoms/button";



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
        <Button onClick={handleNeedHelp} children={<span>Need Help</span>}/>
      </div>
    );
  };
  
  export default Footer;