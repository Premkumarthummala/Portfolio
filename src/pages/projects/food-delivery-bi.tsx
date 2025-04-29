import React from 'react';
import Layout from '../../components/Layout';

const techStack = [
  'Microsoft Power BI',
  'DAX (Data Analysis Expressions)',
  'Power Query',
  'Data Modeling',
  'Data Visualization and Storytelling',
];

export default function FoodDeliveryBIProject() {
  return (
    <Layout>
      <section className="project-detail-section">
        <section className="project-detail-title-section">
          <h1 className="project-detail-title">Food Delivery Business Intelligence Dashboard</h1>
          <div className="project-highlights-box">
            <div className="project-highlights-title">🏆 Project Highlights</div>
            <ul className="project-highlights-list">
              <li>🔹 <strong>Skills Used:</strong> Data Cleaning, DAX, Data Modeling, Visualization</li>
              <li>🔹 <strong>Tools Used:</strong> Power BI, Power Query</li>
              <li>🔹 <strong>Project Focus:</strong> Business Intelligence for Restaurant Sales and Delivery</li>
              <li>🔹 <strong>Dataset Size:</strong> 100,000+ orders</li>
            </ul>
          </div>
        </section>
        <div className="project-detail-overview">
          <p>This project focuses on analyzing food delivery sales, customer demographics, and delivery performance across multiple restaurants using Power BI.<br/>
          The goal was to uncover operational insights, optimize discount strategies, and improve customer satisfaction through six interactive dashboards.</p>
        </div>
        <div className="project-detail-tools-badges">
          {techStack.map((tech) => (
            <span className="tech-badge" key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-detail-section-block">
          <h2>Problem Statement</h2>
          <p>Restaurants face challenges in understanding delivery efficiency, customer behavior, discount effectiveness, and restaurant-level performance.<br/>
          The objective was to design a BI solution that provides actionable insights across these areas.</p>
        </div>
        <div className="project-detail-section-block">
          <h2>Approach</h2>
          <ol>
            <li><strong>Data Collection & Preparation:</strong> Collected and prepared a large food delivery dataset with 100,000+ orders.</li>
            <li><strong>Data Cleaning:</strong> Cleaned and transformed data using Power Query.</li>
            <li><strong>Dashboard Development:</strong> Built six key dashboards inside Power BI:
              <ul>
                <li>Executive Summary Dashboard (high-level KPIs)</li>
                <li>Restaurant Performance Dashboard</li>
                <li>Customer Demographics and Behavior Dashboard</li>
                <li>Discount and Pricing Analysis Dashboard</li>
                <li>Delivery Timing and Efficiency Dashboard</li>
                <li>Predictive and Prescriptive Insights Dashboard</li>
              </ul>
            </li>
            <li><strong>Advanced Analytics:</strong> Applied DAX formulas for KPIs (Revenue, Average Delivery Time, Conversion Rate).</li>
            <li><strong>Interactivity:</strong> Designed interactive visual elements: slicers, drill-throughs, and cross-filtering.</li>
          </ol>
        </div>
        <div className="project-detail-section-block">
          <h2>Key Insights</h2>
          <ul>
            <li>Identified the top-performing restaurants based on revenue and customer satisfaction.</li>
            <li>Discovered that discounts between 10%–15% led to maximum conversion rates.</li>
            <li>Found that deliveries made within 30 minutes resulted in 20% higher feedback scores.</li>
            <li>Detected customer demographics (ages 25–34) with highest order frequency and loyalty.</li>
            <li>Suggested operational improvements based on delivery time analytics and customer churn indicators.</li>
          </ul>
        </div>
        <div className="project-detail-section-block">
          <h2>Final Deliverables</h2>
          <ul>
            <li>Six fully interactive Power BI dashboards</li>
            <li>Business recommendation report (slides or embedded text panels inside dashboards)</li>
            <li>Cleaned, modeled data ready for further predictive modeling if needed</li>
          </ul>
        </div>
        {/* Visual Snapshots Section */}
        <div className="project-detail-section-block project-detail-visual-snapshots">
          <h2>Visual Snapshots</h2>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Executive Summary Dashboard</div>
            <img
              src="/assets/food-delivery-bi/food_delivery_exec_summary_dashboard.png"
              alt="Executive Summary Dashboard screenshot"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Executive Overview of Key Metrics</strong><br/>
              This dashboard provides a high-level snapshot of the business performance, including total revenue, number of orders, average delivery time, customer satisfaction scores, and top-performing restaurants.<br/>
              Interactive slicers allow users to filter results by restaurant, delivery status, and customer demographics to gain targeted insights quickly.
            </div>
          </div>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Restaurant Performance Dashboard</div>
            <img
              src="/assets/food-delivery-bi/food_delivery_restaurant_performance_dashboard.png"
              alt="Restaurant Performance Dashboard screenshot"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Restaurant-Level Performance Analysis</strong><br/>
              This dashboard compares individual restaurant locations across key KPIs such as total revenue, average order value, customer feedback ratings, and order volumes.<br/>
              It helps business managers identify best-performing outlets and those needing operational improvements.
            </div>
          </div>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Customer Insights Dashboard</div>
            <img
              src="/assets/food-delivery-bi/food_delivery_customer_insights_dashboard.png"
              alt="Customer Insights Dashboard screenshot"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Understanding Customer Demographics and Behavior</strong><br/>
              This dashboard analyzes customer age groups, gender, location, and order frequency.<br/>
              It reveals customer loyalty trends, identifies high-value customer segments, and supports targeted marketing strategies.
            </div>
          </div>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Pricing and Discount Analysis Dashboard</div>
            <img
              src="/assets/food-delivery-bi/food_delivery_pricing_discount_dashboard.png"
              alt="Pricing and Discount Analysis Dashboard screenshot"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Effectiveness of Discounts and Pricing Strategies</strong><br/>
              This dashboard evaluates the impact of discount offerings on customer conversions and revenue.<br/>
              It highlights the most effective discount ranges, detects diminishing returns on deep discounts, and recommends optimal promotional strategies.
            </div>
          </div>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Delivery Timing and Efficiency Dashboard</div>
            <img
              src="/assets/food-delivery-bi/food_delivery_delivery_efficiency_dashboard.png"
              alt="Delivery Timing and Efficiency Dashboard screenshot"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Operational Efficiency: Delivery Speed and Performance</strong><br/>
              This dashboard tracks average delivery times, on-time delivery rates, and their correlation with customer feedback.<br/>
              It identifies patterns that influence customer satisfaction and suggests opportunities for optimizing delivery logistics.
            </div>
          </div>
        </div>
        {/* New Section: Predictive and Prescriptive Insights Dashboard */}
        <div className="project-detail-section-block predictive-insights-section">
          <h2>Predictive and Prescriptive Insights Dashboard</h2>
          <div className="visual-snapshot-container">
            <img
              src="/assets/food-delivery-bi/food_delivery_predictive_insights_dashboard.png"
              alt="Predictive and Prescriptive Insights Dashboard screenshot"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Advanced Predictive Insights and Strategic Business Recommendations</strong><br/>
              This dashboard moves beyond descriptive analytics by incorporating predictive and prescriptive insights based on the food delivery business data trends.<br/>
              <div className="predictive-section-subhead">Predictive Analysis</div>
              Based on past order trends, delivery speeds, discount patterns, and customer feedback, the dashboard predicts potential future order volumes and customer churn risks.<br/>
              Predictive visuals help management forecast business performance under different operational scenarios (e.g., slow delivery trends, heavy discount campaigns).<br/>
              <div className="predictive-section-subhead">What-If Discount Impact Analysis (Dynamic Slicer)</div>
              A What-If Slicer allows users to dynamically adjust discount percentages (e.g., 5%, 10%, 15%, 20%) and immediately see the predicted impact on revenue and customer conversion rates.<br/>
              Behind the scenes, the slicer is powered by DAX measures and sensitivity analysis formulas to simulate how varying discount strategies influence total sales and average order values.<br/>
              Insights generated help decision-makers find the optimal discount range where customer conversion is maximized without significantly hurting profitability.<br/>
              <div className="predictive-section-subhead">Prescriptive Recommendations</div>
              Based on the predictive outputs and what-if scenarios, the dashboard suggests strategic actions such as setting ideal discount thresholds, improving delivery logistics, and targeting high-value customer segments to maximize future profitability.
            </div>
          </div>
        </div>
        <div className="project-detail-section-block">
          <h2>Key Skills Highlighted</h2>
          <ul>
            <li>Power BI Dashboard Development</li>
            <li>DAX (KPI Formulas)</li>
            <li>Data Cleaning (Power Query)</li>
            <li>Business Intelligence Reporting</li>
            <li>Data Storytelling and Insight Communication</li>
          </ul>
        </div>
        {/* Supporting Documents Section */}
        <section className="project-detail-section-block supporting-documents-section">
          <h2>Supporting Documents</h2>
          <ul className="supporting-docs-list">
            <li>
              <a href="/assets/food-delivery-bi/food_delivery_dashboard.pbix" className="supporting-doc-link" download>
                <span role="img" aria-label="powerbi" className="supporting-doc-icon">📊</span>
                Download Power BI Dashboard (PBIX)
              </a>
            </li>
            <li>
              <a href="/assets/food-delivery-bi/food_delivery_dataset.csv" className="supporting-doc-link" download>
                <span role="img" aria-label="dataset" className="supporting-doc-icon">📂</span>
                Download Raw Dataset (CSV)
              </a>
            </li>
            <li>
              <a href="/assets/food-delivery-bi/food_delivery_final_presentation.pptx" className="supporting-doc-link" download>
                <span role="img" aria-label="presentation" className="supporting-doc-icon">📑</span>
                Download Final Presentation (PPTX)
              </a>
            </li>
            <li>
              <a href="/assets/food-delivery-bi/food_delivery_summary_report.pdf" className="supporting-doc-link" download>
                <span role="img" aria-label="pdf" className="supporting-doc-icon">📄</span>
                Download Summary Report (PDF)
              </a>
            </li>
          </ul>
        </section>
        {/* Final Reflection Section */}
        <div className="project-detail-section-block final-reflection-section">
          <h2>Final Reflection</h2>
          <ul>
            <li>This project enhanced my ability to design and develop end-to-end Business Intelligence solutions using Power BI.</li>
            <li>It strengthened my skills in data cleaning, DAX-based KPI creation, and interactive dashboard storytelling.</li>
            <li>Building predictive models and implementing What-If analysis deepened my understanding of how data-driven insights can drive strategic business decisions.</li>
            <li>Through this project, I demonstrated the ability to translate large datasets into clear, actionable intelligence that supports both operational improvements and executive-level decision-making.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
