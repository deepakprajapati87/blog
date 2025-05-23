import { AllBanner } from "../components/AllBanner/AllBanner"
import { BlogGrid } from "../components/blogGrid/BlogGrid"

export const BlogSideBar=()=>{
    return(
      <>
      {/* start banner Blog Side bar */}
      
                  <section className='page-title bg-1"'>
                      <div className='container'>
                          <div className='row'>
                              <div className='col-md-12'>
                                  <AllBanner upperTeext='Our blog' midleText='Blog articles' bottomTextOne='Home' bottomTextTwo='Our Blog' />
                              </div>
                          </div>
                      </div>
                  </section>
      
                  {/* end banner Blog Side bar */}

                  {/* start left side */}

                      <section className="bg-gray section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row">
                                    <BlogGrid/>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                      </section>

                       {/* end left side */}
      </>
    )
}