// 通用工具提示配置
export const tooltipConfig = {
    getTooltip: ({ object }) => {
      if (!object) return null;
  
      // 检查是否有 properties 键，若有说明是 GeoJSON
      if (object.properties) {
        return {
          html: `
            <div>
              ${Object.entries(object.properties)
                .map(([key, value]) => `<strong>${key}:</strong> ${value}<br/>`)
                .join('')}
            </div>
          `,
          style: {
            backgroundColor: 'var(--vp-c-bg-soft)',
            color: 'var(--vp-c-text-1)',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid var(--vp-c-border)'
          },
        };
      }
  
      // 如果没有 properties 键，展示 object 的其他键值对
      return {
        html: `
          <div>
            ${Object.entries(object)
              .filter(([key, value]) => typeof value !== 'object' && value !== null && value !== undefined)
              .map(([key, value]) => `<strong>${key}:</strong> ${value}<br/>`)
              .join('')}
          </div>
        `,
        style: {
          backgroundColor: 'var(--vp-c-bg-soft)',
          color: 'var(--vp-c-text-1)',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid var(--vp-c-border)'
        },
      };
    }
  };