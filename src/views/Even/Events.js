import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Events() {
  const classes = useStyles();
  return (
    <div>
      <div class="d-flex mt-2 align-items-center justify-content-between">
        <b class="ml-n2 font-weight-bold">All Event</b>
            <div class="d-flex align-items-center">

                <button className="btn mx-1 bg-lightpurple rounded-pill text-nowrap"><small>+ Add New Event</small></button>
                <div class="d-flex align-items-center mx-1">
                    <div class="mr-1 text-muted">Show</div>
                    <select class="form-select rounded-3 font-weight-bold" style={{width: 'auto'}}
                        aria-label="Default select example">
                        <option value="10" selected>10</option>
                        <option value="1">20</option>
                        <option value="2">30</option>

                    </select>
                </div>

                <select class="form-select rounded-3 mx-1 font-weight-bold"
                        aria-label="Default select example">
                        <option value="10" selected>Select PIC</option>
                        <option value="1">20</option>
                        <option value="2">30</option>

                    </select>

                <input type="date" class="form-control mr-2"/>-
                <input type="date" class="form-control ml-2"/>

                <input type="text" placeholder="Search" class="form-control"></input>
            </div>
    </div>
      

      <table class="table table-borderless mt-5">
            <thead class="border-bottom bg-white">
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Event Name</th>
                    <th>Utilised Venue</th>
                    <th>PIC Legacy</th>
                    <th>Completition</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <a href=""><i class="far fa-edit mr-2"></i></a>
                    </td>
                </tr>
                <tr>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>Tes</td>
                    <td>
                        <a href=""><i class="far fa-edit mr-2"></i></a>
                    </td>
                </tr>

            </tbody>
        </table>

        <div class="d-flex mt-3 justify-content-center">
        <nav aria-label="Page navigation  example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link border-0" href="#" aria-label="Previous">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link border-0" href="#" aria-label="Next">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    </div>
  );
}
