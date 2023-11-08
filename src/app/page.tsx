'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const STRATEGY_PERFORMANCE = [
  {
    Strategy: "Strategy 1",
    TVL: 100000,
    Volatility: 0,
    Collateral: 1000,
    PNL: 100
  },
  {
    Strategy: "Strategy 2",
    TVL: 12500,
    Volatility: 1,
    Collateral: 1000,
    PNL: -100
  },
  {
    Strategy: "Strategy 3",
    TVL: 12500,
    Volatility: 1,
    Collateral: 1000,
    PNL: 100
  },
  {
    Strategy: "Strategy 4",
    TVL: 25000,
    Volatility: 2,
    Collateral: 1000,
    PNL: 100
  },
]

export const Pill = ({ volatility }: { volatility: number }) => {
  const volatilityText = volatility === 0 ? "low" : volatility === 1 ? "medium" : volatility === 2 ? "high" : "none"
  return (
    <button className={`${volatilityText === "low" ? 'bg-low' : volatilityText === "medium" ? 'bg-medium' : volatilityText === "high" ? "bg-high" : 'bg-white'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>
      {volatilityText}
    </button>
  )
}

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white p-12'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            CHART GOES HERE
          </div>
          <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-xl dark:bg-gray-800 dark:border-gray-700">
              <thead className="text-xs text-gray-700 h-56 uppercase">
                <tr>

                  {Object.keys(STRATEGY_PERFORMANCE[0]).map((title, index) => <th key={`${title}-${index}`} className='font-semibold text-grey'>{title}</th>)}
                </tr>
              </thead>
              <tbody>
                {STRATEGY_PERFORMANCE.map((strategy, index) =>
                  <tr key={`${strategy.Strategy}-${index}`} className='h-56 bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='text-black'>{strategy.Strategy}</td>
                    <td className='text-black'>{strategy.TVL}</td>
                    <td><Pill volatility={strategy.Volatility} /></td>
                    <td className='text-black'>{strategy.Collateral}</td>
                    <td className={`${strategy.PNL > 0 ? 'text-success' : strategy.PNL < 0 ? 'text-error' : 'text-black'}`}>
                      {
                        new Intl.NumberFormat(undefined, {
                          style: 'currency',
                          currency: 'USD',
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        }).format(strategy.PNL)
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
