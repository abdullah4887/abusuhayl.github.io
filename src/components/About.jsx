import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id="about">
        <div className="align-element grid md:grid-cols-2 
        items-center gap-16">
            <img src={aboutSvg} className='w-full h-64'/>
            <article><SectionTitle text="About Me"/>
            <p className="text-slate-600 mt-8 leading-loose">
                I am a dedicated <span className="text-black font-bold">Frontend Developer </span>
             who is enthusiastic about delivering value 
            and innovative solutions to businesses, organizations,
             and communities through the application of my skills and expertise.
                </p>
            </article>
        </div>
    </section>
  )
}
export default About