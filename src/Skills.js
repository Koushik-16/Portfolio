import { techs } from "./data"

const Skills = () => {
    return (
        <div name="skills" className=' text-white 
         w-full h-full'     style={{background :'rgb(0, 13, 26)'}}>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                {/* <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
                    <p className='py-6'>This are the technologies I've worked with</p>
                </div> */}
    
                <div className='w-full h-full grid grid-cols-1 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (
    
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-center items-center rounded-lg ${style}`}>
                        <img src={scr} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
      )
}

export default Skills