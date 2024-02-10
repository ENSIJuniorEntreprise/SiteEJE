import React from 'react'
//bc= border colour
//tc= text colour
//bgc=  background colour
function Button(props) {
  const { bc, tc, bgc, children, className } = props;
  return (
    <div className={`border-[3px] border-solid ${bc} ${tc} ${bgc} ${className} flex justify-center items-center text-center font-medium px-8 py-5 w-50 md:w-80 md:px-14 md:text-xl lg:w-96 lg:px-16`}>{children}</div>
  )
}
export default Button