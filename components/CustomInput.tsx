import React from 'react'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { FormControl, FormField,FormLabel,FormMessage} from './ui/form'
import { authformSchema } from '@/lib/utils'
  interface CustomInput{
    control:Control<z.infer<typeof authformSchema>>,
    name: string,
    label: string,
    placeholder: string
  }
const CustomInput = ({ control , name, label, placeholder }:
 CustomInput) => {
  return (
    
      <FormField
          control={control
            
          }
          name= { name }
          render={({ field }) => (
           <div className="form-item">
            <FormLabel className="form-label">
             {label}
            </FormLabel>
            <FormControl>
              <Input 
              placeholder={placeholder}
              className="input-class"
              {...field}
              />
            </FormControl>
            <FormMessage
              className="form-message mt-2"/>
           </div>
          )}
        />
    
  )
}

export default CustomInput
