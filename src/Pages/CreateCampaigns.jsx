import React, { useState } from 'react'
// import {customButton, FormField} from '../Components'
import {money} from '../assets'
import {checkIfImage} from '../Utils'
import { useNavigate } from 'react-router-dom'
import { FormField, CustomButton } from '../Components'

const CreateCampaigns = () => {
const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false);
const [form, setForm] = useState({
  name: '',
  title: '',
  description: '',
  target: '',
  deadeline: '',
  image: ''
}) 

const handleFormFieldChange = (fieldName, e) => {
  setForm({...form, [fieldName]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
}



  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
        {isLoading && 'Loader...'}
        <div  className='flex justify-center items-center p-[16px] sm:min-w-[380px] b-[#3a3a43] rounded-[10px]'>
          <h1 className='font-epilogue font-bold sm:text-[25px] text-[10px] leading-[36px] text-white'>
            Start a campaign
          </h1>
        </div>

        <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]' >
          <div className="flex flex-wrap gap-[40px]">
            <FormField
            labelName="Your Name*"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e)=> handleFormFieldChange('name', e)}
            />
            <FormField
              labelName="Campaign title*"
              placeholder="write a title"
              inputType="text"
              value={form.title}
              handleChange={(e)=> handleFormFieldChange('title', e)} 
            />
           
          </div>
          <FormField
              labelName="Story*"
              placeholder="What's about this Campaign"
              isTextArea
              value={form.description}
              handleChange={(e)=> handleFormFieldChange('description', e)} 
            />

<div className='w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[128px] rounded-[10px] my-4'>
          <img src={money} alt="money" className='w-[40px] h-[40px] object-contain'/>
          <h4 className='text-white font-epilogue font-bold text-[25px] ml-[20px]'>You will get 100% of the money raised</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
            <FormField
            labelName="Goal *"
            placeholder="TRN 5.5"
            inputType="text"
            value={form.target}
            handleChange={(e)=> handleFormFieldChange('target', e)}
            />
            <FormField
              labelName="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadeline}
              handleChange={(e)=> handleFormFieldChange('deadeline', e)} 
            />
        </div>

            <FormField
              labelName="Campaign image *"
              placeholder="Place the URL of your campaign"
              inputType="url"
              value={form.imagee}
              handleChange={(e)=> handleFormFieldChange('image', e)} 
            />

            <div className='flex justify-center items-center mt-[40px]'>
              <CustomButton 
                btnType="submit"
                title="Submit new campaign"
                styles="bg-[#1dc071] "
              />
            </div>

        </form>
    </div>
  )
}

export default CreateCampaigns