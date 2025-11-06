import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { STRATEGY_CONTENT } from '@/data/strategyContent';

// Register fonts if needed
// Font.register({ family: 'YourFont', src: '/fonts/your-font.ttf' });

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },

  // Header
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000321', // navy
    textTransform: 'uppercase'
  },
  headerLarge: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000321', // navy
    textTransform: 'uppercase'
  },
  // Journey Section
  journeySection: {
    backgroundColor: '#f4f6ff', // light-blue
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  journeyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000321',
    marginBottom: 12,
    textAlign: 'center'
  },
  journeyText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4b5563',
    marginBottom: 8,
  },
  journeyTextBold: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4b5563',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  journeySignature: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4b5563',
    fontStyle: 'italic',
    marginTop: 8,
  },

  // Profit Potential
  profitPotentialTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000321',
    marginBottom: 20,
    marginTop: 20,
  },

  // Summary Cards Row
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
    textAlign: 'center',
  },
  summaryCardDeepDive: {
    flex: 1,
    backgroundColor: '#1a3282',
    padding: 16,
    borderRadius: 8,
    textAlign: 'center',
  },
  summaryLabel: {
    fontSize: 8,
    color: '#394554',
    marginBottom: 8,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    letterSpacing: 0.5,
  },
  summaryLabelDeepDive: {
    fontSize: 8,
    color: '#ffffff',
    marginBottom: 8,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    letterSpacing: 0.5,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000321',
  },
  summaryValueDeepDive: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#ffffff',
  },

  // Deep Dive Section
  deepDiveTitle: {
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: '#000321',
    textTransform: 'uppercase',
    marginTop: 24,
    marginBottom: 16,
  },

  // Strategy Section
  strategySection: {
    marginTop: 30,
    marginBottom: 30,
  },
  strategySectionAlt: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#f4f6ff',
    padding: 20,
    borderRadius: 8,
  },
  strategyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 12,
  },
  strategySubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  // Action Steps List
  actionStepsList: {
    marginBottom: 16,
  },
  actionStepItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  checkmark: {
    width: 12,
    height: 12,
    marginRight: 8,
    marginTop: 2,
    color: '#3b82f6', // bright-blue
  },
  actionStepText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: '#374151',
  },

  // Table
  table: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#e5e7eb',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
  },
  tableHeaderCellLeft: {
    borderRightWidth: 1,
    borderRightColor: '#d1d5db',
  },
  tableHeaderLabel: {
    fontSize: 8,
    textTransform: 'uppercase',
    marginBottom: 2,
    fontWeight: 'medium',
  },
  tableHeaderValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableBody: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  tableBodyCell: {
    flex: 1,
    padding: 16,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tableBodyCellLeft: {
    borderRightWidth: 1,
    borderRightColor: '#d1d5db',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 9,
    color: '#6b7280',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 10,
  },
  pageNumber: {
    fontSize: 9,
    color: '#6b7280',
  },
});

export default function ReportPDF({ simulation }) {
  const formatCurrency = (value) => {
    const symbols = { USD: '$', CAD: 'CA$', EUR: '€', GBP: '£' };
    const symbol = symbols[simulation.currency] || '$';
    return `${symbol}${Math.round(value).toLocaleString('en-US')}`;
  };

  // Get strategy content for each strategy
  const strategiesWithContent = simulation.table_one_strategies.map((strategy) => {
    const content = STRATEGY_CONTENT[strategy.id] || {
      strategySectionTitle: strategy.name,
      actionSteps: `Here are your ${strategy.name.toLowerCase()} action steps:`,
      actionStepsList: [],
    };

    return {
      ...strategy,
      ...content,
      revenueIncrease: `${((strategy.profit_increase / simulation.annual_revenue) * 100).toFixed(1)}% / ${formatCurrency(strategy.profit_increase)}`,
      profitIncrease: `${((strategy.profit_increase / simulation.currentProfit) * 100).toFixed(1)}% / ${formatCurrency(strategy.profit_increase)}`,
    };
  });

  const hasDeepDive = simulation.completed_deep_dive && simulation.deep_dive_profit_increase;

  return (
    <Document>
      {/* Page 1: Header, Journey, Profit Potential */}
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <Text style={styles.header}>Your Profit Acceleration <span style={styles.headerLarge}>Roadmap</span></Text>

        <Text style={{ fontSize: 11, textAlign: 'center', color: '#4b5563', marginBottom: 10 }}>
          Prepared for: {simulation.first_name} {simulation.last_name}
        </Text>

        {/* Journey Section */}
        <View style={styles.journeySection}>
          <Text style={styles.journeyTitle}>Your Journey to Profit Acceleration!</Text>

          <Text style={styles.journeyText}>
            First of all, your results are customized, just for you. If you'd like help with any strategy, the bottom of this roadmap will contain a link to book a strategy session with me.
          </Text>

          <Text style={styles.journeyText}>
            The purpose of this roadmap is to give an overview of the path to take in order to create the maximum amount of revenue and profits in your company in the shortest time possible. You can always refer to the report page to watch the videos, which will help guide your understanding on each strategy.
          </Text>

          <Text style={styles.journeyTextBold}>
            I'll outline the major strategies you should follow and the impact to be made.
          </Text>

          <Text style={styles.journeySignature}>
            - Karl Bryan, Your Profit Acceleration Specialist
          </Text>
        </View>
      </Page>

      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <Text style={styles.header}>Your Profit Acceleration Roadmap</Text>

        <Text style={{ fontSize: 11, textAlign: 'center', color: '#4b5563', marginBottom: 10 }}>
          Prepared for: {simulation.first_name} {simulation.last_name}
        </Text>

        {/* Journey Section */}
        <View style={styles.journeySection}>
          <Text style={styles.journeyTitle}>Your Journey to Profit Acceleration!</Text>

          <Text style={styles.journeyText}>
            First of all, your results are customized, just for you. If you'd like help with any strategy, the bottom of this roadmap will contain a link to book a strategy session with me.
          </Text>

          <Text style={styles.journeyText}>
            The purpose of this roadmap is to give an overview of the path to take in order to create the maximum amount of revenue and profits in your company in the shortest time possible. You can always refer to the report page to watch the videos, which will help guide your understanding on each strategy.
          </Text>

          <Text style={styles.journeyTextBold}>
            I'll outline the major strategies you should follow and the impact to be made.
          </Text>

          <Text style={styles.journeySignature}>
            - Karl Bryan, Your Profit Acceleration Specialist
          </Text>
        </View>

        {/* Profit Potential */}
        <Text style={styles.profitPotentialTitle}>Your Customized Profit Potential</Text>

        {/* Row 1 */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Current Revenue</Text>
            <Text style={styles.summaryValue}>{formatCurrency(simulation.currentRevenue)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Current Profit</Text>
            <Text style={styles.summaryValue}>{formatCurrency(simulation.currentProfit)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Expected Revenue Increase</Text>
            <Text style={styles.summaryValue}>{formatCurrency(simulation.table_one_revenue_increase)}</Text>
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Expected Annual Gross Revenue</Text>
            <Text style={styles.summaryValue}>{formatCurrency(simulation.expectedRevenue)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Expected Net Profit Increase</Text>
            <Text style={styles.summaryValue}>{formatCurrency(simulation.table_one_profit_increase)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Expected 5-Year Net Profit Impact</Text>
            <Text style={styles.summaryValue}>{formatCurrency(simulation.tableOneFiveYear)}</Text>
          </View>
        </View>

        {/* Deep Dive Row (if applicable) */}
        {hasDeepDive && (
          <>
            <Text style={styles.deepDiveTitle}>With Deep Dive 40 Strategies</Text>

            <View style={styles.summaryRow}>
              <View style={styles.summaryCardDeepDive}>
                <Text style={styles.summaryLabelDeepDive}>Expected DD40 Revenue Increase</Text>
                <Text style={styles.summaryValueDeepDive}>{formatCurrency(simulation.deep_dive_revenue_increase)}</Text>
              </View>
              <View style={styles.summaryCardDeepDive}>
                <Text style={styles.summaryLabelDeepDive}>Expected DD40 Annual Profit</Text>
                <Text style={styles.summaryValueDeepDive}>
                  {formatCurrency(simulation.currentProfit + simulation.table_one_profit_increase + simulation.deep_dive_profit_increase)}
                </Text>
              </View>
              <View style={styles.summaryCardDeepDive}>
                <Text style={styles.summaryLabelDeepDive}>Expected DD40 5-Year Profit Impact</Text>
                <Text style={styles.summaryValueDeepDive}>
                  {formatCurrency((simulation.table_one_profit_increase + simulation.deep_dive_profit_increase) * 5)}
                </Text>
              </View>
            </View>
          </>
        )}

        <Text style={styles.footer}>
          © {new Date().getFullYear()} Profit Acceleration Software™ | profitaccelerationsoftware.com
        </Text>
      </Page>

      {/* Strategy Pages */}
      {strategiesWithContent.map((strategy, index) => (
        <Page key={strategy.id} size="LETTER" style={styles.page}>
          <View style={index % 2 === 0 ? styles.strategySection : styles.strategySectionAlt}>
            <Text style={styles.strategyTitle}>{strategy.strategySectionTitle}</Text>

            <Text style={styles.strategySubtitle}>{strategy.actionSteps}</Text>

            <View style={styles.actionStepsList}>
              {strategy.actionStepsList && strategy.actionStepsList.map((step, idx) => (
                <View key={idx} style={styles.actionStepItem}>
                  <Text style={styles.checkmark}>✓</Text>
                  <Text style={styles.actionStepText}>{step}</Text>
                </View>
              ))}
            </View>

            {/* Table */}
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <View style={[styles.tableHeaderCell, styles.tableHeaderCellLeft]}>
                  <Text style={styles.tableHeaderLabel}>Expected Increase In</Text>
                  <Text style={styles.tableHeaderValue}>Revenue</Text>
                </View>
                <View style={styles.tableHeaderCell}>
                  <Text style={styles.tableHeaderLabel}>Expected Increase In</Text>
                  <Text style={styles.tableHeaderValue}>Profit</Text>
                </View>
              </View>
              <View style={styles.tableBody}>
                <Text style={[styles.tableBodyCell, styles.tableBodyCellLeft]}>
                  {strategy.revenueIncrease}
                </Text>
                <Text style={styles.tableBodyCell}>
                  {strategy.profitIncrease}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.footer}>
            © {new Date().getFullYear()} Profit Acceleration Software™ | Page {index + 2} of {strategiesWithContent.length + 1}
          </Text>
        </Page>
      ))}
    </Document>
  );
}
