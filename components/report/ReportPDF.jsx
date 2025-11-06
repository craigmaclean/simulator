import { Document, Page, Text, View, StyleSheet, Svg, Circle, Path } from '@react-pdf/renderer';
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
    marginBottom: -5,
    textAlign: 'center',
    color: '#000321',
    textTransform: 'uppercase'
  },
  headerLarge: {
    fontSize: 45,
    fontWeight: 'extrabold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#1a3282',
    textTransform: 'uppercase'
  },
  // Journey Section
  journeySection: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  journeyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginBottom: 12,
    textAlign: 'left'
  },
  journeyText: {
    fontSize: 12,
    lineHeight: 1.6,
    color: '#1c1c1c',
    marginBottom: 8,
  },
  journeyTextBold: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#1c1c1c',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  journeySignature: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#1c1c1c',
    fontStyle: 'italic',
    marginTop: 8,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },

  // Profit Potential
  profitPotentialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1c1c1c',
    marginBottom: 5,
    marginTop: 20,
  },

  // Summary Cards Row
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
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

  // Strategy Section
  strategySection: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    gap: 20,
  },
  strategySectionAlt: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 8,
  },
  strategyContent: {
    flex: 2,
  },
  strategyMetrics: {
    flex: 1,
    marginTop: 20,
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
    marginTop: 0,
  },
  checkmarkSvg: {
    width: 12,
    height: 12,
  },
  actionStepText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: '#374151',
  },

  // Metrics Cards (replacing the table)
  metricCard: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  metricLabel: {
    fontSize: 9,
    color: '#374151',
    textTransform: 'uppercase',
    marginBottom: 4,
    fontWeight: 'medium',
  },
  metricValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000321',
  },

  // Strategy Metrics Table
  strategyMetricsTable: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
  },
  strategyMetricsTableAlt: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  strategyTableRow: {
    flexDirection: 'row',
  },
  strategyTableHeader: {
    flex: 1,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  strategyTableCell: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
  },
  strategyTableCellAlt: {
    flex: 1,
    padding: 12,
    textAlign: 'center',
  },
  strategyTableHeaderText: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#212121',
    marginBottom: 2,
  },
  strategyTableHeaderTextBold: {
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212121',
  },
  strategyTableCellText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212121',
  },

  // Divider between strategies
  strategyDivider: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginVertical: 20,
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
        <Text style={styles.header}>Your Profit Acceleration</Text>
        <Text style={styles.headerLarge}>Roadmap</Text>

        <Text style={{ fontSize: 11, textAlign: 'center', fontWeight: 'semibold', color: '#1c1c1c', marginBottom: 10 }}>
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
            - [COACH NAME], Your Profit Acceleration Specialist
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
      </Page>

      {/* Strategy Pages - 2 strategies per page */}
      {Array.from({ length: Math.ceil(strategiesWithContent.length / 2) }, (_, pageIndex) => {
        const startIndex = pageIndex * 2;
        const strategiesOnPage = strategiesWithContent.slice(startIndex, startIndex + 2);

        return (
          <Page key={`strategy-page-${pageIndex}`} size="LETTER" style={styles.page}>
            {strategiesOnPage.map((strategy, strategyIndex) => (
              <View key={strategy.id} style={strategyIndex % 2 === 0 ? styles.strategySection : styles.strategySectionAlt}>
                  <View style={styles.strategyContent}>
                    <Text style={styles.strategyTitle}>{strategy.strategySectionTitle}</Text>
                    <Text style={styles.strategySubtitle}>{strategy.actionSteps}</Text>

                    <View style={styles.actionStepsList}>
                      {strategy.actionStepsList && strategy.actionStepsList.map((step, idx) => (
                        <View key={idx} style={styles.actionStepItem}>
                          <View style={styles.checkmark}>
                            <Svg style={styles.checkmarkSvg} viewBox="0 0 24 24">
                              <Circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="#4169E1"
                                stroke="#4169E1"
                                strokeWidth="2"
                              />
                              <Path
                                d="m9 12 2 2 4-4"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </Svg>
                          </View>
                          <Text style={styles.actionStepText}>{step}</Text>
                        </View>
                      ))}
                    </View>
                  </View>

                  <View style={styles.strategyMetrics}>
                    {/* Revenue Table */}
                    <View style={strategyIndex % 2 === 0 ? styles.strategyMetricsTable : styles.strategyMetricsTableAlt}>
                      <View style={styles.strategyTableRow}>
                        <View style={styles.strategyTableHeader}>
                          <Text style={styles.strategyTableHeaderText}>Expected Increase In</Text>
                          <Text style={styles.strategyTableHeaderTextBold}>Revenue</Text>
                        </View>
                      </View>
                      <View style={styles.strategyTableRow}>
                        <View style={strategyIndex % 2 === 0 ? styles.strategyTableCellAlt : styles.strategyTableCell}>
                          <Text style={styles.strategyTableCellText}>{strategy.revenueIncrease}</Text>
                        </View>
                      </View>
                    </View>

                    {/* Profit Table */}
                    <View style={strategyIndex % 2 === 0 ? styles.strategyMetricsTable : styles.strategyMetricsTableAlt}>
                      <View style={styles.strategyTableRow}>
                        <View style={styles.strategyTableHeader}>
                          <Text style={styles.strategyTableHeaderText}>Expected Increase In</Text>
                          <Text style={styles.strategyTableHeaderTextBold}>Profit</Text>
                        </View>
                      </View>
                      <View style={styles.strategyTableRow}>
                        <View style={strategyIndex % 2 === 0 ? styles.strategyTableCellAlt : styles.strategyTableCell}>
                          <Text style={styles.strategyTableCellText}>{strategy.profitIncrease}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
            ))}

            <Text style={styles.footer}>
              © {new Date().getFullYear()} Profit Acceleration Software™ | Page {pageIndex + 2} of {Math.ceil(strategiesWithContent.length / 2) + 1}
            </Text>
          </Page>
        );
      })}
    </Document>
  );
}
