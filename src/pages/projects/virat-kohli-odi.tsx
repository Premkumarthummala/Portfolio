import React from 'react';
import Layout from '../../components/Layout';

const techStack = [
  'Microsoft Excel',
  'Descriptive Statistical Analysis',
  'Linear Regression Modeling',
  'Data Cleaning and Visualization',
];

export default function ViratKohliODIProject() {
  return (
    <Layout>
      <section className="project-detail-section">
        <section className="project-detail-title-section">
          <h1 className="project-detail-title">Virat Kohli ODI Career Performance Analysis</h1>
          {/* Project Highlights Box */}
          <div className="project-highlights-box">
            <div className="project-highlights-title">🏆 Project Highlights</div>
            <ul className="project-highlights-list">
              <li>🔹 <strong>Skills Used:</strong> Descriptive Statistics, Regression Analysis, Data Cleaning, Data Visualization</li>
              <li>🔹 <strong>Tools Used:</strong> Microsoft Excel, Regression Modeling, Visualization Techniques</li>
              <li>🔹 <strong>Project Focus:</strong> Analyzing ODI career performance, trend identification, predictive modeling</li>
              <li>🔹 <strong>Timeline Covered:</strong> 2008 – 2024</li>
            </ul>
          </div>
          {/* Key Achievements Section */}
          <div className="project-detail-section-block key-achievements-section">
            <h2>Key Achievements</h2>
            <ul>
              <li>Analyzed 200+ ODI matches over 16 years of career data</li>
              <li>Built regression models to forecast future batting averages</li>
              <li>Visualized performance trends and milestone years</li>
              <li>Delivered a comprehensive Excel analysis and presentation</li>
            </ul>
          </div>
        </section>
        <div className="project-detail-overview">
          <p>This project focuses on analyzing Virat Kohli’s One Day International (ODI) batting performance from 2008 to 2024.<br/>
          Using descriptive statistics and regression modeling in Excel, the goal was to understand trends in his consistency, explore key performance metrics over time, and predict future performance patterns based on historical data.</p>
        </div>
        <div className="project-detail-tools-badges">
          {techStack.map((tech) => (
            <span className="tech-badge" key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-detail-section-block">
          <h2>Problem Statement</h2>
          <p>The objective was to evaluate Virat Kohli’s batting performance over his ODI career, identify consistency patterns, and develop predictive insights into his future performance based on past trends.</p>
        </div>
        <div className="project-detail-section-block">
          <h2>Approach</h2>
          <ol>
            <li>Collected match-by-match ODI batting records for Virat Kohli between 2008 and 2024.</li>
            <li>Cleaned and organized the dataset, including handling missing values and formatting.</li>
            <li>Performed descriptive analysis to calculate key statistics:
              <ul>
                <li>Total runs</li>
                <li>Batting average</li>
                <li>Strike rate</li>
                <li>Number of centuries and half-centuries</li>
              </ul>
            </li>
            <li>Built regression models to explore relationships between time (year) and performance metrics.</li>
            <li>Visualized key trends using line graphs and scatter plots.</li>
            <li>Forecasted future performance based on historical patterns.</li>
          </ol>
        </div>
        <div className="project-detail-section-block project-detail-visual-snapshots">
          <h2>Visual Snapshots</h2>
          {/* Visual 1: Line Chart */}
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Average Runs and Strike Rate (2008–2024)</div>
            <img
              src="/assets/virat-kohli-odi/virat_kohli_avg_runs_strike_rate.png"
              alt="Line chart showing Average Runs and Strike Rate for Virat Kohli ODI career years 2008-2024"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Performance Trends Over Time (2008–2024)</strong><br/>
              This line chart visualizes Virat Kohli's batting performance across the ODI years 2008 to 2024.<br/>
              The <span style={{color:'#f28c3a'}}>orange line</span> represents the average runs scored per year, while the <span style={{color:'#0070f3'}}>blue line</span> represents the strike rate.<br/>
              Noticeable peaks in runs occurred around 2012, 2017, and 2018, coinciding with major tournament performances.<br/>
              The linear trend lines indicate that while the strike rate improved steadily over time, the average runs showed periodic fluctuations but remained relatively consistent overall.<br/>
              These trends highlight Kohli’s remarkable ability to maintain a strong batting performance across different stages of his career.
            </div>
          </div>

          {/* Visual 2: Scatter Plot + Regression Line */}
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Batting Average Trend (2008–2024)</div>
            <img
              src="/assets/virat-kohli-odi/virat_kohli_batting_average_trend.png"
              alt="Scatter plot showing Batting Average vs Year with Regression Line for Virat Kohli ODI career"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Long-Term Performance Trend (Regression Analysis)</strong><br/>
              This scatter plot visualizes Virat Kohli's batting averages year by year from 2008 to 2024, overlaid with a regression trend line.<br/>
              The upward slope of the regression line highlights a gradual improvement and strong stability in his ODI batting performances across the years.<br/>
              The visualization confirms that Kohli maintained consistent excellence despite variations, and the model predicts that this performance trend would likely continue beyond 2024.
            </div>
          </div>

          {/* Visual 3: Yearly Performance Summary Table */}
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Yearly Performance Summary Table</div>
            <img
              src="/assets/virat-kohli-odi/virat_kohli_yearly_performance_table_updated.png"
              alt="Yearly Performance Summary Table: Sum of Runs, Average of Runs, Average of Strike Rate for Virat Kohli ODI career"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Yearly Performance Summary</strong><br/>
              This table summarizes Virat Kohli’s ODI batting performance by year, capturing key metrics such as total runs, average runs per innings, and average strike rate.<br/>
              It provides numerical support for the visual trends observed in the previous charts, highlighting standout years (e.g., 2016, 2017, 2018) with exceptionally high averages and strong strike rates, as well as periods of performance fluctuations.
            </div>
          </div>
        </div>
        {/* New Section: Regression Analysis of Performance Factors */}
        <div className="project-detail-section-block regression-analysis-section">
          <h2>Regression Analysis of Performance Factors</h2>

          {/* Chart 1: Relationship Between Strike Rate, Balls Faced, and Runs Scored */}
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Relationship Between Strike Rate (SR), Balls Faced (BF), and Runs Scored</div>
            <img
              src="/assets/virat-kohli-odi/virat_kohli_sr_bf_runs_scatter.png"
              alt="Scatter plot showing relationship between Balls Faced, Strike Rate, and Runs Scored"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Understanding the Relationship Between Key Batting Metrics</strong><br/>
              This scatter plot explores the relationship between Balls Faced (BF), Strike Rate (SR), and Runs Scored.<br/>
              It highlights that as Kohli faces more balls, the likelihood of scoring higher runs increases.<br/>
              Strike rate trends also indicate phases of aggressive versus consolidative innings.
            </div>
          </div>
          <div className="visual-divider" />

          {/* Chart 2: Residuals vs Fitted Values */}
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Residuals vs Fitted Values</div>
            <img
              src="/assets/virat-kohli-odi/virat_kohli_residuals_vs_fitted.png"
              alt="Residuals vs Fitted Values plot for regression model"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Model Residuals Analysis</strong><br/>
              The Residuals vs Fitted Values plot helps evaluate model quality.<br/>
              A random scatter around the horizontal line indicates acceptable model fitting, but patterns suggest minor heteroscedasticity (changing variance across values), requiring cautious interpretation of regression results.
            </div>
          </div>
          <div className="visual-divider" />

          {/* Chart 3: Normal Q-Q Plot of Residuals */}
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Normal Q-Q Plot of Residuals</div>
            <img
              src="/assets/virat-kohli-odi/virat_kohli_residuals_qq.png"
              alt="Normal Q-Q plot of regression residuals"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Normality Check for Regression Residuals</strong><br/>
              The Q-Q plot assesses whether the residuals follow a normal distribution, an assumption for reliable regression modeling.<br/>
              Deviations from the line at extremes suggest slight non-normality but overall acceptable model behavior for predictive analysis.
            </div>
          </div>
          <div className="visual-divider" />

          {/* Chart 4: Regression Output Summary (Excel Table) */}
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Regression Output Summary (Excel Table)</div>
            <img
              src="/assets/virat-kohli-odi/virat_kohli_regression_output_summary.png"
              alt="Excel regression output summary for Virat Kohli ODI career analysis"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              <strong>Multiple Linear Regression Summary</strong><br/>
              The regression output shows a strong model fit with an R² value of 0.9415 (94.15%), meaning the selected factors (Balls Faced, Strike Rate, Batting Position) explain a significant portion of variation in Runs Scored.<br/>
              Significant predictor variables are highlighted through low p-values, supporting the strength of the model.
            </div>
          </div>
        </div>
        <div className="project-detail-section-block">
          <h2>Key Insights</h2>
          <ul>
            <li>Kohli’s batting average showed remarkable stability with periodic peaks after major tournaments.</li>
            <li>Regression models indicated a positive upward trend in performance consistency over time.</li>
            <li>The years 2012, 2018, and 2023 marked the highest average runs per year.</li>
            <li>Despite minor dips, Kohli maintained a consistently high standard across different phases of his career.</li>
            <li>Predictive analysis suggested continued strong performance trends beyond 2024.</li>
          </ul>
        </div>
        <div className="project-detail-section-block">
          <h2>Final Deliverables</h2>
          <ul>
            <li>A cleaned and structured Excel dataset</li>
            <li>Statistical summary tables</li>
            <li>Regression analysis results</li>
            <li>Visual trend charts showing performance evolution over time</li>
            <li>Predictive graphs forecasting expected future batting averages</li>
          </ul>
        </div>
        <div className="project-detail-section-block">
          <h2>Key Skills Highlighted</h2>
          <ul>
            <li>Descriptive Statistics</li>
            <li>Data Cleaning in Excel</li>
            <li>Regression Analysis</li>
            <li>Data Visualization and Reporting</li>
          </ul>
        </div>
      </section>
      {/* Supporting Documents Section */}
      <section className="project-detail-section-block supporting-documents-section">
        <h2>Supporting Documents</h2>
        <ul className="supporting-docs-list">
          <li>
            <a href="/assets/virat-kohli-odi/virat_kohli_final_presentation.pptx" className="supporting-doc-link" download>
              {/* Optional icon */}
              <span role="img" aria-label="presentation" className="supporting-doc-icon">📊</span>
              Download Final Presentation (PPTX)
            </a>
          </li>
          <li>
            <a href="/assets/virat-kohli-odi/virat_kohli_analysis_workbook.xlsx" className="supporting-doc-link" download>
              <span role="img" aria-label="excel" className="supporting-doc-icon">📈</span>
              Download Excel Analysis File (XLSX)
            </a>
          </li>
          <li>
            <a href="/assets/virat-kohli-odi/virat_kohli_odi_batting_dataset.xlsx" className="supporting-doc-link" download>
              <span role="img" aria-label="dataset" className="supporting-doc-icon">📂</span>
              Download Raw Dataset (XLSX)
            </a>
          </li>
        </ul>
      </section>
      {/* Final Reflection Section */}
      <section className="project-detail-section-block final-reflection-section">
        <h2>Final Reflection</h2>
        <p>
          This project deepened my ability to combine descriptive statistics, data visualization, and predictive modeling in a real-world performance context.<br/>
          Working with Kohli’s career data helped me strengthen my skills in regression analysis, critical data cleaning, and storytelling through visual insights.<br/>
          It also reinforced the importance of validating assumptions like normality and residual behavior in regression models, ensuring that the findings are both statistically sound and actionable for predictive purposes.
        </p>
      </section>
    </Layout>
  );
}
