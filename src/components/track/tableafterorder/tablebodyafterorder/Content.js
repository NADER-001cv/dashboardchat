import React from "react";

function Content() {
  return (
    <div>
      <div className="container">
        <div className="row   justify-content-between    p-2">
          <div class="col">Name</div>
          <div class="col">Company</div>
          <div class="col">Type</div>
          <div class="col">Account</div>
          <div class="col">Status</div>
        </div>

        <div className="row   justify-content-between    p-2">
          <div class="col fw-bold fs-5">Marketing</div>
          <div class="col fw-bold fs-5">Wilmar</div>
          <div class="col fw-bold fs-5">Service</div>
          <div class="col fw-bold fs-5">$ 100</div>
          <div class="col fw-bold fs-5">Paid</div>
        </div>

        <div className="row   justify-content-between    p-2">
          <div class="col">Description</div>
        </div>

        <div className="row   justify-content-between    p-2">
          <div class="col">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            luctus, nisl eu blandit sagittis, diam arcu fermentum ex, a eleifend
            eros dolor ultrices lorem. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Mauris eu
            nunc vitae lectus consectetur volutpat. Nam euismod vitae tortor ac
            ultricies. Suspendisse suscipit eu nisl placerat faucibus. Sed
            tempus tristique faucibus. Nunc euismod, sem in lacinia suscipit,
            sapien enim finibus lacus, cursus tempor metus risus et lacus.
            Suspendisse in dui sit amet eros interdum mattis. Pellentesque et ex
            ac metus iaculis porta at at dui. Nunc vel sem ac leo consequat
            blandit id vel purus. Morbi posuere lectus ut enim sollicitudin,
            quis pharetra eros auctor.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
