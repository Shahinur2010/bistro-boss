import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20 bg-fixed">
            <SectionTitle subHeading="check it out" heading="Featured Item">
            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-60 pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Nov 25, 2025</p>
                <p className="uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque pariatur, laborum obcaecati fuga ipsum odit repudiandae quasi. Voluptas nulla ab facilis quaerat? Et id molestiae natus minus ipsum officiis a suscipit commodi veritatis accusamus sed perferendis quaerat quod, itaque quasi reprehenderit eaque, hic error incidunt consequuntur aliquid, soluta ducimus.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;