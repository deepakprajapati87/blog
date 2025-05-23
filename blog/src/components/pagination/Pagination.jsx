import { NavLink } from "react-bootstrap"
import './Pagination.css';
export const Pagination = () => {
    return (
        <>
            <section className="d-flex">
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-12">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link">Prev</a>
                                    </li>
                                    <li class="page-item"><NavLink class="page-link">1</NavLink></li>
                                    <li class="page-item"><NavLink class="page-link" >2</NavLink></li>
                                    <li class="page-item"><NavLink class="page-link">3</NavLink></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}