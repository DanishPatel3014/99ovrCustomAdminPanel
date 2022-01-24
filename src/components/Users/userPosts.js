import React, { useEffect , useState} from "react";
import{Table} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from 'axios'
import ReactPaginate from "react-paginate";
import { useParams } from "react-router";
import ReactFancyBox from 'react-fancybox'
import animationPic from "../../assets/images/avtar/animation-pic.jpg";
  

  export default function Tables() {
   
    const params = useParams();
    console.log(params.userPostsID)
    const currentUserPostsID = params.userPostsID;
    console.log(params.userPostsID)

    const [topteenlist, settopteenlist] = useState([])
    // const [NewID, setNewID] = useState('')
    // setNewID(currentUserActivityID);
    const [PageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const [CurrentSelectedUser,  ] = useState('')
    // useEffect(() => {
    //   triggeringFunction();
    // }, [NewID])
    

    const triggeringFunction = async (currentPage) => {
        
        let getData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/userPosts/${currentUserPostsID}?page=${currentPage}&limit=10`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        // setPageCount(Math.ceil(getData.data.totallength/10))
    console.log(getData.data.result)
    window.scrollTo(0, 0)
        settopteenlist(getData.data.result);
      };
      

      const approveTournament = async (tournamentID) => {
        // console.log(streamID)
        axios.put(`https://thewebtestlink.xyz/api/admin/approveLeagueRequest/${tournamentID}`,
        
          null,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        triggeringFunction();
    }
  

    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1); 
      }
      useEffect(() => {
        triggeringFunction(currentPage);
        console.log('done')
      }, [currentPage]);
  
    return (
        <div>
        <button
          id="munnababa"
          style={{ display: "none" }}
          onClick={() => {
            triggeringFunction();
          }}
        ></button>
        <div className="app-content content ">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper container-xxl p-0">
            <div className="content-header row"></div>
            <div className="content-body">
              <section id="dashboard-ecommerce">
                <div className="row" id="table-hover-row">
                  <div className="col-12">
                    <div className="card">
                      <div className="crd-wrp">
                        <div className="row align-items-center">
                          <div className="col-md-9">
                            <div className="card-header">
                              <h4 className="card-title">{}</h4>
                            </div>
                          </div>
                          <div className="col-md-3">
                           
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        {topteenlist.length > 0 ? (
                          <Table hover responsive>
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>User Name</th>
                                <th>Game Tag</th>
                                <th>Comment Count</th>
                                <th>Description</th>
                                <th>Game Name</th>
                                <th>Game Image</th>
                                <th>Likes</th>
                                <th>Shares</th>
                                <th>_99s</th>
                              </tr>
                            </thead>
                            <tbody>
                              {topteenlist.map((v, i) => {
                               
                                return (
                                  <tr key={i}>
                                    <td>
                                      <span className="align-middle fw-bold">
                                        {currentPage === 1 ? (i + 1) : ((i + (10 * (currentPage - 1)))+1)}
                                      </span>
                                    </td>
                                    
                                    <td>{v.user.userName}</td>
                                    <td>{v.user.gamerTag}</td>
                                    <td>{v.comment.length}</td>
                                    <td>{v.description}</td>
                                    <td>{v.game.gameName}</td>
                                    <td>
                                    <div className="aniimg">
                                      {<ReactFancyBox
                                        thumbnail={v.image ? v.image : animationPic}
                                        image={v.image ? v.image : animationPic}/>}
                                      </div>
                                        </td>
                                    <td>{v.likes.length}</td>
                                    <td>{v.shares.length}</td>
                                    <td>{v._99s.length}</td>

                                  </tr>
                                );
                              })
                              }
                              
                            </tbody>
                          </Table>
                        ) : topteenlist.length === 0 ? (
                          <div style={{textAlign:"center"}}>
                            <p>No Data to Show</p>
                          </div>
                        ) : (
                          <div className="spiner">
                            <Spinner type="grow" color="primary" />
                            <Spinner type="grow" color="secondary" />
                            <Spinner type="grow" color="success" />
                          </div>
                        )}
                      </div>
                      <ReactPaginate 
                      previousLabel={'<<'}
                      nextLabel={'>>'}
                      breakLabel={'...'}
                      pageCount={PageCount}
                      marginPagesDisplayed={3}
                      pageRangeDisplayed={3}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination justify-content-center'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      previousClassName={'page-item'}
                      previousLinkClassName={'page-link'}
                      nextClassName={'page-item'}
                      nextLinkClassName={'page-link'}
                      breakClassName={'page-item'}
                      breakLinkClassName={'page-link'}
                      activeClassName={'active'}
                    />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  