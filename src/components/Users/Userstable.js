import React, { useEffect , useState} from "react";
import{Table} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from 'axios'
import ReactPaginate from "react-paginate";
  
  export default function Tables() {
   
   

    const [topteenlist, settopteenlist] = useState([])
    const [PageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);


    

    const triggeringFunction = async (currentPage) => {
        
        let getData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/userList?page=${currentPage}&limit=10`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        setPageCount(Math.ceil(getData.data.totallength/10))
    console.log(getData.data)
    window.scrollTo(0, 0)
        settopteenlist(getData.data);
      
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
                              <h4 className="card-title">Users Requests</h4>
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
                                <th>user Name</th>
                                <th>online status</th>
                                <th>user email</th>
                                <th>xp</th>
                                <th>coins</th>
                                <th>level</th>
                                <th>total LikedVideos</th>
                                <th>total 99 Videos</th>
                                <th>total SharedVideos</th>
                                <th>total CommentedVideos</th>
                                <th>99 Count</th>
                                <th>likes Count</th>
                                <th>share Count</th>
                                <th>comment Count</th>
                               
                              </tr>
                            </thead>
                            <tbody>
                              {topteenlist.map((v, i) => {
                               
                                return (
                                  <tr key={i}>
                                    <td>
                                      <span className="align-middle fw-bold">
                                        {++i}
                                      </span>
                                    </td>
                                    <td>{v.userName}</td>
                                    
                                    <td>{v.online_status}</td>
                                    <td>{v.email}</td>
                                    <td>{v.xp}</td>
                                    <td>{v.coins}</td>
                                    <td>{v.level}</td>
                                    <td>{v.totalLikedVideos}</td>
                                    <td>{v.total99edVideos}</td>
                                    <td>{v.totalSharedVideos}</td>
                                    <td>{v.totalCommentedVideos}</td>
                                    <td>{v._99Count}</td>
                                    <td>{v.likesCount}</td>
                                    <td>{v.shareCount}</td>
                                    <td>{v.commentCount}</td>
                                    
     
                                   
                                    
                                
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
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
  