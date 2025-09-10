
import { Mail } from 'lucide-react';
import { MoveDown } from 'lucide-react';
import img from '../assets/deoph.jpg'
export const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center md:my-10'>
        <div className='flex flex-col'>
           <h1 className='text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0'>Bonjour ; <br />je suis <span className='text-accent'>Deo-gracias AGBIDI</span></h1> 

           <p className='my-4 text-md text-center md:text-left'>Développeuse Fullstack avec 1 an d’expérience <br /> spécialisée en Tailwind CSS et Laravel. <br /> Contactez-moi pour vos besoins en développement web.</p>
           <div className='flex flex-row gap-x-4 mt-4'>
          <a 
            href="https://wa.me/22948046278?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20vos%20services%20de%20d%C3%A9veloppement%20web." 
            target="_blank" 
            rel="noopener noreferrer" 
            className='btn btn-accent w-fit'
          >
            <Mail className='w-5 h-5'/>
            Contactez-moi
          </a>

          <a 
            href="https://www.canva.com/design/DAGXx2zvctI/VRzoBRR5UuJwVYMm0N40kw/edit?utm_content=DAGXx2zvctI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            className='btn btn-accent w-fit'
          >
            <MoveDown className='w-5 h-5' />
            TÉLÉCHARGER MON CV
          </a>
        </div>

                  
              
                </div>

              
                <div className='md:ml-60'>
                <img src={img} alt="" className='w-96 h-96 object-cover border-8 border-accent shadow-xl'
        style={{
            borderRadius:"30% 70% 70% / 67% 62% 38% 33%"
        }}
        />
        </div>
    </div>
  )
}

export default Home