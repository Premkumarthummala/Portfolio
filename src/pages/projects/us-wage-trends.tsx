import React from 'react';
import Layout from '../../components/Layout';

const techStack = [
  'Python (Pandas, NumPy)',
  'Seaborn (Data Visualization)',
  'Statsmodels (Regression, ANOVA)',
  'Jupyter Notebook',
  'Descriptive & Inferential Statistics',
];

export default function USWageTrendsProject() {
  return (
    <Layout>
      <section className="project-detail-section">
        <h1 className="project-detail-title">U.S. Wage Trends and Employment Analysis</h1>
        {/* Project Highlights Box */}
        <div className="project-highlights-box">
          <div className="project-highlights-title">🏆 Project Highlights</div>
          <ul className="project-highlights-list">
            <li>🔹 <strong>Skills Used:</strong> Regression Modeling, ANOVA, EDA, Data Visualization</li>
            <li>🔹 <strong>Tools Used:</strong> Python (Pandas, Seaborn, Statsmodels)</li>
            <li>🔹 <strong>Project Focus:</strong> Wage disparity analysis and predictor modeling</li>
            <li>🔹 <strong>Dataset:</strong> U.S. BLS OEWS 2024 Dataset</li>
          </ul>
        </div>
        {/* Key Achievements Section */}
        <div className="project-detail-section-block key-achievements-section">
          <h2>Key Achievements</h2>
          <ul>
            <li>Analyzed 1M+ wage records from U.S. BLS 2024 dataset</li>
            <li>Built multiple linear regression model predicting wages</li>
            <li>Conducted ANOVA to validate wage group differences</li>
            <li>Visualized key wage disparities by occupation group</li>
            <li>Delivered complete Python project with visuals + insights</li>
          </ul>
        </div>
        <div className="project-detail-overview">
          <p>This project analyzes wage distribution patterns and employment concentrations across different U.S. occupational groups using the 2024 Bureau of Labor Statistics (BLS) OEWS dataset.<br/>
          The goal was to uncover wage disparities, identify significant predictors of wage variation, and validate findings through regression modeling and ANOVA.</p>
        </div>
        <div className="project-detail-tools-badges">
          {techStack.map((tech) => (
            <span className="tech-badge" key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-detail-section-block">
          <h2>Problem Statement</h2>
          <p>Understanding wage disparities across occupational categories is crucial for policymakers and businesses.<br/>
          This project investigates how occupational groupings (I_GROUP) and total employment (TOT_EMP) affect average wages in the U.S. labor market.</p>
        </div>
        {/* Data Manipulation Section */}
        <div className="project-detail-section-block">
          <h2>Data Manipulation</h2>
          <p>
            The original 2024 BLS OEWS dataset was preprocessed to select relevant features for analysis.<br/>
            Key fields such as Occupational Group (I_GROUP), Total Employment (TOT_EMP), Mean Hourly Wage (A_MEAN), and Mean Annual Wage (M_MEAN) were extracted.<br/>
            Categorical variables were properly encoded, and numerical variables were formatted to ensure consistency.<br/>
            Additional derived features were created where necessary (e.g., wage difference calculations, employment-to-wage ratios).<br/>
            <span className="visual-insight-check">✅ This shows you understood and prepared the data structure properly.</span>
          </p>
        </div>
        {/* Data Cleaning Section */}
        <div className="project-detail-section-block">
          <h2>Data Cleaning</h2>
          <p>
            Rigorous data cleaning was performed to ensure high-quality analysis.<br/>
            Steps included:<br/>
            - Removing placeholder values (e.g., missing wages or undefined employment numbers)<br/>
            - Handling missing or null entries by appropriate imputation or row removal<br/>
            - Converting categorical variables into analysis-ready formats<br/>
            - Checking for duplicate records and inconsistencies across occupation codes<br/>
            The final cleaned dataset maintained data integrity and analytical relevance, enabling reliable modeling and visualization.
          </p>
        </div>
        {/* Data Exploration Section */}
        <div className="project-detail-section-block">
          <h2>Data Exploration</h2>
          <p>
            Descriptive statistics and visual exploration were conducted to understand overall wage distributions, employment patterns, and initial relationships between variables.<br/>
            Summary statistics such as mean, median, variance, and standard deviation were calculated for key numerical columns.<br/>
            Visualizations such as histograms, scatter plots, and heatmaps were created to identify underlying trends, correlations, and outliers in the dataset.<br/>
            This exploration guided the choice of variables for the final regression and ANOVA modeling.<br/>
            <span className="visual-insight-check">✅ Shows you analyzed before modeling — critical step!</span>
          </p>
        </div>
        <div className="project-detail-section-block">
          <h2>Approach</h2>
          <ol>
            <li>Cleaned and prepared the raw 2024 OEWS dataset.</li>
            <li>Conducted descriptive statistical analysis to explore basic trends.</li>
            <li>Performed Pearson correlation analysis between employment size and average wage.</li>
            <li>Built multiple linear regression models using occupational groups and total employment as predictors.</li>
            <li>Applied ANOVA to test for statistically significant wage differences among groups.</li>
            <li>Visualized results using heatmaps, scatter plots, and boxplots.</li>
          </ol>
        </div>
        <div className="project-detail-section-block">
          <h2>Key Insights</h2>
          <ul>
            <li>Occupational category (I_GROUP) was a strong significant predictor of wage levels (p &lt; 0.001).</li>
            <li>Total employment (TOT_EMP) showed minimal impact on wage prediction (weak correlation).</li>
            <li>Healthcare practitioners, management, and technology occupations showed the highest wage clusters.</li>
            <li>Service occupations had the widest wage variability and lowest average wages.</li>
            <li>Visual trends highlighted major wage inequalities across industries.</li>
          </ul>
        </div>
        <div className="project-detail-section-block project-detail-visual-snapshots">
          <h2>Visual Insights</h2>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Correlation Heatmap of Key Variables</div>
            <img
              src="/assets/us-wage-trends/us_wage_correlation_heatmap.png"
              alt="Correlation heatmap showing relationships between wage variables"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              The heatmap reveals strong correlations between wage metrics and occupational groups.<br/>
              Employment levels show moderate correlation with wage variables.<br/>
              <span className="visual-insight-check">✅ This guided our feature selection for the regression model.</span>
            </div>
          </div>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Wage Distribution by Occupational Group</div>
            <img
              src="/assets/us-wage-trends/us_wage_boxplot_by_occupation.png"
              alt="Boxplot showing wage distribution across different occupational groups"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              The boxplot demonstrates clear wage disparities between occupational categories.<br/>
              Some groups show higher variance in wages, indicating more wage inequality within those sectors.<br/>
              <span className="visual-insight-check">✅ This directly visually proves wage disparity across categories.</span>
            </div>
          </div>
          <div className="visual-snapshot-container">
            <div className="visual-snapshot-title">Multiple Linear Regression Model Summary</div>
            <img
              src="/assets/us-wage-trends/us_wage_regression_summary.png"
              alt="Regression Summary Table screenshot"
              className="visual-snapshot-img"
            />
            <div className="visual-snapshot-caption">
              The regression model uses occupational group and total employment as predictors of average wage.<br/>
              Results show that occupational group is a statistically significant predictor (p &lt; 0.001), while total employment is not.<br/>
              The model’s R² score demonstrates a moderate ability to explain wage variation, validating the importance of industry classification in salary analysis.<br/>
              <span className="visual-insight-check">✅ This is your statistical proof after the EDA visuals.</span>
            </div>
          </div>
        </div>
        <div className="project-detail-section-block">
          <h2>Key Skills Highlighted</h2>
          <ul>
            <li>Python Data Analysis</li>
            <li>Statistical Modeling (Regression and ANOVA)</li>
            <li>Data Visualization</li>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Storytelling with Data</li>
          </ul>
        </div>
        <div className="project-detail-section-block">
          <h2>Final Deliverables</h2>
          <ul>
            <li>Fully cleaned and analyzed dataset.</li>
            <li>Python Jupyter Notebook showing all code, outputs, and interpretations.</li>
            <li>Exported .html file for easy web viewing (no Python installation needed).</li>
          </ul>
        </div>
        {/* Supporting Documents Section */}
        <section className="project-detail-section-block supporting-documents-section">
          <h2>Supporting Documents</h2>
          <ul className="supporting-docs-list">
            <li className="supporting-doc-item">
              <a href="/assets/us-wage-trends/us_wage_analysis.html" className="supporting-doc-link" download>
                <span role="img" aria-label="html" className="supporting-doc-icon">🌐</span>
                <span className="supporting-doc-text">Download Final Analysis (HTML)</span>
              </a>
            </li>
            <li className="supporting-doc-item">
              <a href="/assets/us-wage-trends/us_wage_analysis.ipynb" className="supporting-doc-link" download>
                <span role="img" aria-label="jupyter" className="supporting-doc-icon">📓</span>
                <span className="supporting-doc-text">Download Jupyter Notebook (IPYNB)</span>
              </a>
            </li>
            <li className="supporting-doc-item">
              <a href="/assets/us-wage-trends/us_wage_cleaned_dataset.csv" className="supporting-doc-link" download>
                <span role="img" aria-label="csv" className="supporting-doc-icon">📄</span>
                <span className="supporting-doc-text">Download Cleaned Dataset (CSV)</span>
              </a>
            </li>
            <li className="supporting-doc-item">
              <a href="/assets/us-wage-trends/us_wage_analysis.pdf" className="supporting-doc-link" download>
                <span role="img" aria-label="pdf" className="supporting-doc-icon">📑</span>
                <span className="supporting-doc-text">Download PDF Version</span>
              </a>
            </li>
          </ul>
        </section>
        {/* Final Reflection Section */}
        <div className="project-detail-section-block final-reflection-section">
          <h2>Final Reflection</h2>
          <ul>
            <li>This project strengthened my ability to apply Python for real-world economic data analysis.</li>
            <li>It deepened my understanding of statistical modeling, wage disparity evaluation, and critical data cleaning techniques.</li>
            <li>Working with the 2024 OEWS dataset also taught me the importance of effective visualization and model validation when deriving actionable labor market insights.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
