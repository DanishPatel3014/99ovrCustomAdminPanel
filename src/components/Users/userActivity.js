import React, { useEffect , useState} from "react";
import{Table} from "reactstrap";
import { Spinner } from "reactstrap";
import axios from 'axios'
import ReactPaginate from "react-paginate";
import { useParams } from "react-router";
  
  export default function Tables() {
   
    const params = useParams();
    console.log(params.userActivityID)
    const currentUserActivityID = params.userActivityID;
    console.log(currentUserActivityID)

    const [topteenlist, settopteenlist] = useState([])
    const [PageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);


    

    const triggeringFunction = async () => {
        
        let getData = await axios.get(
          `https://thewebtestlink.xyz/api/admin/userActivities/${currentUserActivityID}`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
          }
        );
        // setPageCount(Math.ceil(getData.data.totallength/10))
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
      useEffect(() => {
        triggeringFunction();
      }, []);
  
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
                                <th>Coins</th>
                                <th>Comment Count</th>
                                <th>Favorite Game</th>
                                <th>Followers</th>
                                <th>Followings</th>
                                <th>level</th>
                                <th>Joined Clubs</th>
                                <th>Posts</th>
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
                                        {currentPage === 1 ? (i + 1) : ((i + (10 * (currentPage - 1)))+1)}
                                      </span>
                                    </td>
                                    <td>{v.coins}</td>
                                    
                                    <td>{v.commentCount}</td>
                                    <td>{v.favoriteGames}</td>
                                    <td>{v.followers}</td>
                                    <td>{v.followings}</td>
                                    <td>{v.level}</td>
                                    <td>{v.joinedClubs}</td>
                                    <td>{v.post}</td>
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
  