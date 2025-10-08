// Database abstraction layer - may need to swap Supabase for AWS later

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Main function to save simulation data
export async function saveSimulation(data) {
  try {
    const { data: result, error } = await supabase
      .from('submissions')
      .insert([{
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        currency: data.currency || 'USD',
        annual_revenue: data.annualRevenue,
        gross_profit_margin: data.grossProfitMargin,
        net_profit_margin: data.netProfitMargin,
        overall_impact: data.overallImpact,
        cut_costs: data.cutCosts,
        market_dominating_position: data.marketDominatingPosition,
        compelling_offer: data.compellingOffer,
        increase_prices: data.increasePrices,
        upsell_cross_sell: data.upsellCrossSell,
        bundling: data.bundling,
        downsell: data.downsell,
        additional_products_services: data.additionalProductsServices,
        drip_campaign: data.dripCampaign,
        alliances_joint_ventures: data.alliancesJointVentures,
        more_leads: data.moreLeads,
        digital_marketing: data.digitalMarketing,
      }])
      .select()
      .single();

    if (error) throw error;

    return { success: true, id: result.id };
  } catch (error) {
    console.error('Error saving simulation:', error);
    return { success: false, error: error?.message || 'Unknown error' };
  }
}

// Optional: Retrieve simulations by email
export async function getSimulationsByEmail(email) {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map(record => ({
      id: record.id,
      createdAt: record.created_at,
      firstName: record.first_name,
      lastName: record.last_name,
      email: record.email,
      currency: record.currency,
      annualRevenue: record.annual_revenue,
      grossProfitMargin: record.gross_profit_margin,
      netProfitMargin: record.net_profit_margin,
      overallImpact: record.overall_impact,
      cutCosts: record.cut_costs,
      marketDominatingPosition: record.market_dominating_position,
      compellingOffer: record.compelling_offer,
      increasePrices: record.increase_prices,
      upsellCrossSell: record.upsell_cross_sell,
      bundling: record.bundling,
      downsell: record.downsell,
      additionalProductsServices: record.additional_products_services,
      dripCampaign: record.drip_campaign,
      alliancesJointVentures: record.alliances_joint_ventures,
      moreLeads: record.more_leads,
      digitalMarketing: record.digital_marketing,
    }));
  } catch (error) {
    console.error('Error fetching simulations:', error);
    return [];
  }
}
