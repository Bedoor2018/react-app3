import logo from "./logo.svg";
import "./index.css";
import React from "react";
import { Component } from "react";

//Card Component
function Card(props) {
  return (
    <div className="col-md-4 col-lg-4 mt-2">
      <div className="p-4 bg-white rounded">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between align-items-center mb-2">
            <div class="d-flex flex-row justify-content-between align-items-center mb-2">
              <span class="item px-2 rounded">{props.label}</span>
            </div>
            <div>
              <i className="fa fa-heart-o ml-2" />
            </div>
          </div>
          <div className="mb-2 p-image">
            <img
              className="img-fluid img-responsive rounded"
              src={props.img}
              height={250}
            />
          </div>
          <div className="text-center">
            <span className="p-name">{props.name}</span>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center mt-4">
            <div className="ratings">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="buttons">
              <div className="btn-group btn-group-sm" role="group">
                <button
                  className="btn btn-outline-primary text-dark border-dark price"
                  type="button"
                >
                  ${props.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
//to get card lower than 50
function getLower(params) {
  params
    .filter(p => p.price < 50)
    .map((p, index) => {
      return <Card img={p.img} name={p.name} price={p.price} />;
    });
}

function getHigher(params) {
  params
    .filter(p => p.price >= 50)
    .map((p, index) => {
      return <Card img={p.img} name={p.name} price={p.price} />;
    });
}*/
//to get card higher than 50 and lower than 50
function PrintSpecificCards(params, target) {
  return( params
    .filter(p => (target == "H" ? p.price >= 50 : p.price < 50))
    .map((p, index) => {
      return <Card img={p.img} name={p.name} price={p.price} />;
    }));
}

//to print All card
function printAllCards(params) {
  return params.map((product, index) => {
    return <Card img={product.img} name={product.name} price={product.price} />;
  });
}

//to get new product
function PrintNewCards(params) {
  const d = new Date();
  return( params
    .filter(p => (p.date.year=== d.getFullYear()))
    .map((p, index) => {
      return <Card img={p.img} name={p.name} price={p.price} label="New" />;
    }));
}
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  //Array of products

  products = [
    {
      img: "https://i.imgur.com/bV1xmG5.jpg",
      name: "Timpot sofa set",
      price: 40,
      date: { month: 10, year: 2019 }
    },
    {
      img: "https://i.imgur.com/hRlGe10.jpg",
      name: "Migol sofa set",
      price: 20,
      date: { month: 8, year: 2020 }
    },
    {
      img: "https://i.imgur.com/vgMi4nw.jpg",
      name: "Mithon sofa set",
      price: 70,
      date: { month: 3, year: 2019 }
    },
    {
      img: "https://i.imgur.com/beeeLPf.jpg",
      name: "Tixon sofa set",
      price: 35,
      date: { month: 10, year: 2021 }
    },
    {
      img: "https://i.imgur.com/R9Y4IG7.jpg",
      name: "Lusy sofa set",
      price: 90,
      date: { month: 1, year: 2022 }
    },
    {
      img: "https://i.imgur.com/6qKAkNk.jpg",
      name: "Piply sofa set",
      price: 70,
      date: { month: 2, year: 2022 }
    }
  ];

//render function
  render() {
    return (
      <div className="container-fluid mt-5 mb-5">
        <div className="p-2 bg-white px-4 rounded">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row align-items-center filters">
              <button className="ml-2" onClick={printAllCards(this.products)}>
                All products
              </button>
            </div>
            <div className="d-flex flex-row align-items-center filters mt-2">
              <div className="sub-cat ml-2">
                <button
                  className="text-muted"
                  onClick={PrintSpecificCards(this.products, "L")}
                >
                  Lower than 50$
                </button>
              </div>
              <div className="sub-cat ml-2">
                <button
                  className="text-muted"
                  onClick={PrintSpecificCards(this.products, "H")}
                >
                  higher than 50$
                </button>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center filters">
              <div className="d-flex flex-row align-items-center">
                <button className="ml-2">New products</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="x">
        {printAllCards(this.products)}</div>
      </div>
    );
  }
}
