import { AllBanner } from '../components/AllBanner/AllBanner';
import { BlogGrid } from '../components/blogGrid/BlogGrid';
import { Pagination } from '../components/pagination/pagination';
import './page.css'
export const Blog = () => {
    return (
        <>
            {/* start banner BlogGrid */}

            <section className='page-title bg-1"'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <AllBanner upperTeext='About Us' midleText='Our blog' bottomTextOne='Blog articles' bottomTextTwo='Our blog' />
                        </div>
                    </div>
                </div>
            </section>

            {/* end banner  BlogGrid */}
            <section className='section bg-gray'>
                <div className='container'>
                    <div className='row'>
                        <BlogGrid />
                    </div>
                </div>

            </section>
        </>
    );
}