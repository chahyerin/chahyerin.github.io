import {forwardRef} from "react";
import {twJoin} from "tailwind-merge";

function Form ({children, ...rest}) {
    return <form {...rest}>
        {children}
    </form>
}

const Input =  forwardRef(({className, ...rest}, ref) => {
    return (
        <input ref={ref} className={twJoin('focus:outline-none py-3 px-4 border-[0.5px] border-gray-500 bg-black', className)} {...rest} />
        )

})

function Label ({className, required = false, children, ...rest}) {
    return (
        <label className={twJoin('block py-2 pl-2 text-white', className)} {...rest}>
            <span className={twJoin( 'block',
                required ? 'after:content-[""] after:mb-2.5 after:w-1 after:h-1 after:inline-block after:bg-red-500 after:rounded-full after:ml-0.5' : '',
            )}>{children}</span>
        </label>
    )
}

function InputGroup ({children, className}) {
    return (<div className={twJoin('flex flex-col', className)}>
        {children}
        </div>
    )
}

const Textarea = forwardRef(({className, ...rest}, ref) => {
  return (
      <textarea ref={ref} className={twJoin('focus:outline-none resize-none py-3 px-4 border-[0.5px] border-gray-500 bg-black', className)} {...rest}  />
  )
})

const Select = forwardRef(({className, children, ...rest}, ref) => {
    return (
        <select ref={ref} className={twJoin('focus:outline-none py-3 px-4 border-[0.5px] border-gray-500 bg-black', className)} {...rest}>
            {children}
        </select>
    )
})


export default {
    Form,
    Input,
    Label,
    InputGroup,
    Textarea,
    Select
}