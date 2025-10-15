// lib/pdf/ReportTemplate.jsx

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

// Styles (removed Font.register - use default fonts instead)
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    color: '#1e3a8a', // Navy
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6', // Blue
    borderBottomStyle: 'solid',
    paddingBottom: 15,
  },
  logo: {
    width: 180,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#64748b',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    width: '50%',
    fontWeight: 'bold',
    color: '#475569',
  },
  value: {
    width: '50%',
    color: '#1e293b',
  },
  highlight: {
    backgroundColor: '#dbeafe',
    padding: 15,
    borderRadius: 4,
    marginBottom: 15,
  },
  highlightTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  highlightValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#1e3a8a',
    padding: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 9,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
    padding: 8,
    fontSize: 9,
  },
  tableRowAlt: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
    padding: 8,
    backgroundColor: '#f8fafc',
    fontSize: 9,
  },
  col1: { width: '10%' },
  col2: { width: '50%' },
  col3: { width: '20%', textAlign: 'right' },
  col4: { width: '20%', textAlign: 'right' },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    borderTopStyle: 'solid',
    paddingTop: 10,
  },
});

const ReportTemplate = ({ simulation }) => {
  const {
    first_name,
    last_name,
    email,
    created_at,
    annual_revenue,
    gross_profit_margin,
    net_profit_margin,
    global_impact,
    currency,
    table_one_strategies,
    deep_dive_strategies,
    currentProfit,
    totalRevenueIncrease,
    totalProfitIncrease,
    totalFiveYearImpact,
    newAnnualProfit,
    completed_deep_dive,
  } = simulation;

  const formatCurrency = (value) => {
    const symbols = { USD: '$', CAD: 'CA$', EUR: '€', GBP: '£' };
    const symbol = symbols[currency] || '$';
    return `${symbol}${Math.round(value).toLocaleString('en-US')}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Document>
      <Page size="Letter" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            src={`${process.cwd()}/public/profit-acceleration-logo.png`}
            style={styles.logo}
          />
          <Text style={styles.title}>Profit Acceleration Report</Text>
          <Text style={styles.subtitle}>
            Generated on {formatDate(created_at)}
          </Text>
        </View>

        {/* User Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Report For</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{first_name} {last_name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
        </View>

        {/* Input Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Inputs</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Annual Revenue:</Text>
            <Text style={styles.value}>{formatCurrency(annual_revenue)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Gross Profit Margin:</Text>
            <Text style={styles.value}>{gross_profit_margin}%</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Net Profit Margin:</Text>
            <Text style={styles.value}>{net_profit_margin}%</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Current Annual Profit:</Text>
            <Text style={styles.value}>{formatCurrency(currentProfit)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Global Impact:</Text>
            <Text style={styles.value}>{global_impact}%</Text>
          </View>
        </View>

        {/* Key Results */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Profit Acceleration Results</Text>

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>Expected Revenue Increase</Text>
            <Text style={styles.highlightValue}>{formatCurrency(totalRevenueIncrease)}</Text>
          </View>

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>Expected Profit Increase</Text>
            <Text style={styles.highlightValue}>{formatCurrency(totalProfitIncrease)}</Text>
          </View>

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>New Annual Profit</Text>
            <Text style={styles.highlightValue}>{formatCurrency(newAnnualProfit)}</Text>
          </View>

          <View style={styles.highlight}>
            <Text style={styles.highlightTitle}>5-Year Net Profit Impact</Text>
            <Text style={styles.highlightValue}>{formatCurrency(totalFiveYearImpact)}</Text>
          </View>
        </View>

        {/* Table One Strategies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Table One: 12 Areas of Impact</Text>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.col1}>#</Text>
              <Text style={styles.col2}>Strategy</Text>
              <Text style={styles.col3}>Impact %</Text>
              <Text style={styles.col4}>Profit Increase</Text>
            </View>

            {table_one_strategies?.map((strategy, index) => (
              <View
                key={strategy.id}
                style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}
              >
                <Text style={styles.col1}>{index + 1}</Text>
                <Text style={styles.col2}>{strategy.name}</Text>
                <Text style={styles.col3}>{strategy.impact}%</Text>
                <Text style={styles.col4}>{formatCurrency(strategy.profit_increase)}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.footer}>
          Profit Acceleration Software © {new Date().getFullYear()} • profitaccelerationsoftware.com
        </Text>
      </Page>

      {/* Page 2 - Deep Dive (if completed) */}
      {completed_deep_dive && deep_dive_strategies && (
        <Page size="Letter" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deep Dive: 28 Additional Areas</Text>

            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.col1}>#</Text>
                <Text style={styles.col2}>Strategy</Text>
                <Text style={{ width: '40%', textAlign: 'right' }}>Profit Increase</Text>
              </View>

              {deep_dive_strategies?.map((strategy, index) => (
                <View
                  key={strategy.id}
                  style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlt}
                >
                  <Text style={styles.col1}>{index + 1}</Text>
                  <Text style={styles.col2}>{strategy.name}</Text>
                  <Text style={{ width: '40%', textAlign: 'right' }}>
                    {formatCurrency(strategy.profit_increase)}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={styles.footer}>
            Profit Acceleration Software © {new Date().getFullYear()} • profitaccelerationsoftware.com
          </Text>
        </Page>
      )}
    </Document>
  );
};

export default ReportTemplate;
