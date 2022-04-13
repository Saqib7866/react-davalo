import React from 'react'
import Banner from '../../assets/images/banner/banner-small.png'
import ProductMain from '../../assets/images/product-slider/productMain.png'

const ProductDetail = () => {
  return (
<>
<section class="product-detail">
        <div class="container-fluid">
            <div class="content-card">
                <div class="row">
                    <div class="col-xl-9">
                        <div class="row">
                            <div class="col-lg-5 col-md-4">
                                <div class="image-box">
                                    <img src={ProductMain}/>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-8">
                                <div class="info-card">
                                    <span class="badge-label save">Save 10%</span>
                                    <h2>
                                        Neutrogena Spot Controlling Oil-free Facial
                                        Scrub 150 ml Pack scrub
                                    </h2>
                                    <div class="brand">Brand: <span>Neutrogena</span></div>
                                    <div class="d-flex flex-wrap mb-sm-4">
                                        <div class="price">Rs. 499 <del>550</del></div>
                                        <div class="btn-group variationBtn">
                                            <button class="btn active">Pack</button>
                                            <button class="btn">Strip</button>
                                        </div>
                                    </div>
                                    <div class="desc-text">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Aliquam rem officia, corrupti reiciendis minima
                                            nisi modi, quasi, odio minus dolore impedit fuga eum
                                            eligendi. Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. Aliquam rem officia, corrupti
                                            reiciendis minima nisi modi, quasi, odio minus dolore
                                            impedit fuga eum eligendi
                                        </p>
                                    </div>
                                    <div class="detailFooter">
                                        <div class="input-spinner me-4">
                                            <input type="number" id="incValue" class="form-control" value="5" min="0" />
                                            <div class="icon-spinner">
                                                <button class="btn-inc">
                                                    <span class="iconify"
                                                        data-icon="eva:arrow-ios-downward-outline"></span>
                                                </button>
                                                <button class="btn-dec">
                                                    <span class="iconify"
                                                        data-icon="eva:arrow-ios-upward-outline"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-primary"><i><span class="iconify"  data-icon="ph:shopping-cart-simple"></span></i>
                                            Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-detail">
                            <ul class="nav nav-pills customTabs" id="pills-tab" role="tablist">
                                <li role="presentation">
                                    <button class="active" id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description" type="button" role="tab"> 
                                        Description
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button id="pills-faqs-tab" data-bs-toggle="pill" data-bs-target="#pills-faqs" type="button" role="tab">
                                        FAQ's
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button id="pills-precautions-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-precautions" type="button" role="tab">
                                        Precautions
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button id="pills-storage-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-storage" type="button" role="tab">
                                        Storage
                                    </button>
                                </li>
                               
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-description" role="tabpanel"
                                    aria-labelledby="pills-description-tab">
                                    <div class="tabs-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum.
                                        </p>
                                        <p>
                                            Stet clita kasd gubergren, no sea takimata sanctus est
                                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren,
                                        </p>
                                        <p>
                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-faqs" role="tabpanel"
                                    aria-labelledby="pills-faqs-tab">
                                    <div class="tabs-body">
                                        <h3> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor ?</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <h3> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor ?</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum.
                                        </p>
                                        <h3> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor ?</h3>
                                        <p>
                                            Stet clita kasd gubergren, no sea takimata sanctus est
                                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren,
                                        </p>
                                        <p>
                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-precautions" role="tabpanel"
                                    aria-labelledby="pills-precautions-tab">
                                    <div class="tabs-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum.
                                        </p>
                                        <p>
                                            Stet clita kasd gubergren, no sea takimata sanctus est
                                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren,
                                        </p>
                                        <p>
                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed diam nonumy eirmod tempor invidunt ut labore et
                                            dolore magna aliquyam erat, sed diam voluptua. At vero
                                            eos et accusam et justo duo dolores et ea rebum. Stet
                                            clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea
                                            takimata sanctus est Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-storage" role="tabpanel"
                                aria-labelledby="pills-storage-tab">
                                <div class="tabs-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et
                                        dolore magna aliquyam erat, sed diam voluptua. At vero
                                        eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem
                                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et
                                        dolore magna aliquyam erat, sed diam voluptua. At vero
                                        eos et accusam et justo duo dolores et ea rebum.
                                    </p>
                                    <p>
                                        Stet clita kasd gubergren, no sea takimata sanctus est
                                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren,
                                    </p>
                                    <p>
                                        no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et
                                        dolore magna aliquyam erat, sed diam voluptua. At vero
                                        eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem
                                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et
                                        dolore magna aliquyam erat, sed diam voluptua. At vero
                                        eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem
                                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et
                                        dolore magna aliquyam erat, sed diam voluptua. At vero
                                        eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem
                                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et
                                        dolore magna aliquyam erat, sed diam voluptua. At vero
                                        eos et accusam et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata sanctus est Lorem
                                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                        consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                                        takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 d-xl-block d-none">
                        <div class="banner text-xl-end text-center">
                            <img src={Banner} alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetail