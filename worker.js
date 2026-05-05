const STATS = {
  "v1.2.5_windows_QEditor_1.2.5_Windows_amd64_setup.exe": 200,
  "v1.2.5_windows_QEditor_1.2.5_Windows_amd64.zip": 100,
  "v1.2.5_linux_QEditor_1.2.5_Linux_amd64.deb": 50,
  "v1.2.5_linux_QEditor_1.2.5_Linux_amd64.AppImage": 10,
  "v1.2.5_linux_QEditor_1.2.5_Linux_amd64_bundle.zip": 10
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/downloads') {
      if (request.method === 'GET') {
        return handleGetDownloads(env);
      } else if (request.method === 'POST') {
        return handlePostDownload(request, env);
      }
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleGetDownloads(env) {
  const stats = { ...STATS };
  
  if (env.DOWNLOAD_STATS) {
    try {
      const list = await env.DOWNLOAD_STATS.list();
      for (const key of list.keys) {
        const value = await env.DOWNLOAD_STATS.get(key.name);
        stats[key.name] = parseInt(value) || 0;
      }
    } catch (e) {
      console.error('KV read error:', e);
    }
  }
  
  return new Response(JSON.stringify(stats), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function handlePostDownload(request, env) {
  try {
    const body = await request.json();
    const { version, os, filename } = body;

    if (!version || !os || !filename) {
      return new Response(JSON.stringify({ error: 'Missing parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const key = `${version}_${os}_${filename}`;
    let newCount = 1;

    if (env.DOWNLOAD_STATS) {
      const current = await env.DOWNLOAD_STATS.get(key);
      newCount = (parseInt(current) || 0) + 1;
      await env.DOWNLOAD_STATS.put(key, newCount.toString());
    } else {
      newCount = (STATS[key] || 0) + 1;
      STATS[key] = newCount;
    }

    return new Response(JSON.stringify({ count: newCount }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}