import React from 'react'
import Faq from 'react-faq-component'

function ProductAccordion() {
  const data = {
    rows: [
      {
        title: "Description",
        content:
        "This product is the epitome of modern design and quality. Expertly crafted using premium materials, it offers a perfect blend of functionality and style. Whether you're dressing for a casual outing or a formal event, this product elevates your look with its refined details and exceptional comfort. Experience the difference that meticulous attention to detail and superior craftsmanship can make.",
      },
      {
        title: "Care Instructions",
        content:
          "To keep your product in pristine condition, please follow the care guidelines. We recommend gentle machine wash or hand wash in cold water, avoid harsh detergents, and either line dry or tumble dry on low. Always check the care label for best results.",
      },
      {
        title: "Shipping & Returns",
        content:
          "Orders are typically processed within 2-3 business days and shipped via our standard service. If you're not completely satisfied with your purchase, returns or exchanges are accepted within 30 days of receipt. Products must be unused and in their original packaging to qualify.",
      },
    ],
  }

  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "gray", 
  }

  const config = {
    // animate: true, tabFocus: true arrowIcon: "", 
  }

  return (
    <div className="mt-10 paragraph-text tracking-wide leading-7 ">
      <Faq data={data} styles={styles} config={config} />
    </div>
  )
}

export default ProductAccordion
