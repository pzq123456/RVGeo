import * as d3 from 'd3';
import { scaleOrdinal, scaleSequential, scaleDiverging } from 'd3-scale';

/**
 * 创建颜色映射函数工厂
 * @param {Object} options 配置选项
 * @param {string} [options.type='sequential'] 色带类型 'ordinal'|'sequential'|'diverging'
 * @param {string|Array} [options.scheme='viridis'] 色板名称或自定义颜色数组
 * @param {Array} [options.domain] 值域范围 [min, max] 或离散值数组
 * @param {boolean} [options.isReverse=false] 是否反转色带
 * @returns {Function} 颜色映射函数 (value: number) => string
 */
export function createColorBand({
    type = 'sequential',
    scheme = 'viridis',
    domain,
    isReverse = false
  } = {}) {
    let scale;
    
    if (type === 'ordinal') {
      const range = typeof scheme === 'string' 
        ? getPredefinedOrdinalScheme(scheme)
        : scheme;
      
      // 处理离散色带反转
      const finalRange = isReverse ? [...range].reverse() : range;
      scale = scaleOrdinal().range(finalRange);
    } 
    else {
      const interpolator = typeof scheme === 'string'
        ? getPredefinedInterpolator(scheme)
        : d3.interpolateRgbBasis(scheme);
      
      // 处理连续色带反转
      const finalInterpolator = isReverse 
        ? t => interpolator(1 - t)
        : interpolator;
      
      if (type === 'diverging') {
        scale = scaleDiverging().interpolator(finalInterpolator);
      } else {
        scale = scaleSequential().interpolator(finalInterpolator);
      }
    }
  
    if (domain) {
      scale.domain(domain);
    }
  
    return scale;
  }

/**
 * 创建离散颜色比例尺
 */
function createOrdinalScale(scheme, domain) {
  // 处理预定义色板或自定义颜色数组
  const range = typeof scheme === 'string' 
    ? getPredefinedOrdinalScheme(scheme)
    : scheme;

  const scale = scaleOrdinal()
    .range(range);

  if (domain) {
    scale.domain(domain);
  }

  return scale;
}

/**
 * 创建连续颜色比例尺
 */
function createSequentialScale(scheme, domain) {
  // 获取插值器函数
  const interpolator = typeof scheme === 'string'
    ? getPredefinedInterpolator(scheme)
    : d3.interpolateRgbBasis(scheme);

  const scale = scaleSequential()
    .interpolator(interpolator);

  if (domain) {
    scale.domain(domain);
  }

  return scale;
}

/**
 * 创建发散颜色比例尺
 */
function createDivergingScale(scheme, domain) {
  // 获取插值器函数
  const interpolator = typeof scheme === 'string'
    ? getPredefinedInterpolator(scheme)
    : d3.interpolateRgbBasis(scheme);

  const scale = scaleDiverging()
    .interpolator(interpolator);

  if (domain) {
    scale.domain(domain);
  }

  return scale;
}

/**
 * 获取预定义的离散色板
 */
export function getPredefinedOrdinalScheme(schemeName) {
  const schemeMap = {
    'category10': d3.schemeCategory10,
    'accent': d3.schemeAccent,
    'dark2': d3.schemeDark2,
    'paired': d3.schemePaired,
    'pastel1': d3.schemePastel1,
    'pastel2': d3.schemePastel2,
    'set1': d3.schemeSet1,
    'set2': d3.schemeSet2,
    'set3': d3.schemeSet3,
    'tableau10': d3.schemeTableau10
  };

  return schemeMap[schemeName.toLowerCase()] || d3.schemeCategory10;
}

/**
 * 获取预定义的连续/发散插值器
 */
export function getPredefinedInterpolator(schemeName) {
  const interpolatorMap = {
    // 连续色板
    'viridis': d3.interpolateViridis,
    'plasma': d3.interpolatePlasma,
    'inferno': d3.interpolateInferno,
    'magma': d3.interpolateMagma,
    'cividis': d3.interpolateCividis,
    'turbo': d3.interpolateTurbo,
    
    // 发散色板
    'spectral': d3.interpolateSpectral,
    'rdbu': d3.interpolateRdBu,
    'rdylbu': d3.interpolateRdYlBu,
    'rdylgn': d3.interpolateRdYlGn,
    'piyg': d3.interpolatePiYG,
    'prgn': d3.interpolatePRGn,
    'brbg': d3.interpolateBrBG
  };

  return interpolatorMap[schemeName.toLowerCase()] || d3.interpolateViridis;
}

/**
 * 反转色带
 */
function reverseScheme(scheme, type) {
  if (typeof scheme !== 'string') {
    // 自定义颜色数组直接反转
    return [...scheme].reverse();
  }

  // 为预定义色板添加 reversed 后缀
  return `${scheme}-reversed`;
}

// 色带分组配置
export const colorSchemes = [
    {
      label: '连续色带',
      options: [
        { value: 'viridis', label: 'Viridis', type: 'sequential' },
        { value: 'plasma', label: 'Plasma', type: 'sequential' },
        { value: 'inferno', label: 'Inferno', type: 'sequential' },
        { value: 'magma', label: 'Magma', type: 'sequential' },
        { value: 'cividis', label: 'Cividis', type: 'sequential' },
        { value: 'turbo', label: 'Turbo', type: 'sequential' }
      ]
    },
    {
      label: '发散色带',
      options: [
        { value: 'spectral', label: 'Spectral', type: 'diverging' },
        { value: 'rdbu', label: 'Red-Blue', type: 'diverging' },
        { value: 'rdylbu', label: 'Red-Yellow-Blue', type: 'diverging' },
        { value: 'rdylgn', label: 'Red-Yellow-Green', type: 'diverging' },
        { value: 'piyg', label: 'Pink-Yellow-Green', type: 'diverging' }
      ]
    },
    // {
    //   label: '分类色带',
    //   options: [
    //     { value: 'category10', label: 'Category10', type: 'ordinal' },
    //     { value: 'accent', label: 'Accent', type: 'ordinal' },
    //     { value: 'set1', label: 'Set1', type: 'ordinal' },
    //     { value: 'set2', label: 'Set2', type: 'ordinal' },
    //     { value: 'set3', label: 'Set3', type: 'ordinal' },
    //     { value: 'pastel1', label: 'Pastel1', type: 'ordinal' }
    //   ]
    // }
  ];