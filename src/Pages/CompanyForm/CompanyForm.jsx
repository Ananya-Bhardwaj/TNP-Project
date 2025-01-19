import { Input, InputLabel, Button } from '../../Components'
import './styles.css'

// Name
// Description
// Job Details
// Profile
// Timeline
// Eligibility : branch + marks + dead and active back + gap year
// JD pdf
// Responsibilities


const CompanyForm = () => {
  return (
    <div className='form-container'>
        <InputLabel 
            tag="Name"
        />
        <Input 
        label="Name"
        placeholder="Name of Company"
        type="text"/>
        
        <Input 
        label="Description"
        placeholder="Description of Company and Hiring"
        type="text"/>
        
        <Input 
        label="Job Details"
        placeholder="Job details (if any)"
        type="text"/>
        
        <Input 
        label="Timeline"
        placeholder="Timeline"
        type="text"/>
        
        <Input 
        label="Eligibility"
        placeholder="Eligibility"
        type="text"/>
        
        <Input 
        label="Responsibilities"
        placeholder="Responsibilities"
        type="text"/>

        <Input 
        label="Job Description"
        placeholder="Job Description"
        type="file"/>

        
        <Input 
        label="Stipend/ Salary details"
        placeholder="Enter Pay"
        type="text"/>

        <Button 
        buttonText="Submit Data"
        handleClick={() => {}}
        />
        
    </div>
  )
}

export default CompanyForm