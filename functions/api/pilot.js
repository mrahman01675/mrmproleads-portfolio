export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const name = clean(form.get("name"));
  const email = clean(form.get("email"));
  const company = clean(form.get("company"));
  const website = clean(form.get("website"));
  const message = clean(form.get("message"));
  const honeypot = clean(form.get("website_confirm"));
  if (honeypot) return new Response("OK", {status:200});
  if (!name || !email || !message) return new Response("Missing required fields", {status:400});
  const fields = {
    research_goal: clean(form.get("research_goal")),
    account_count: clean(form.get("account_count")),
    business_type: clean(form.get("business_type")),
    urgency: clean(form.get("urgency")),
    starting_asset: clean(form.get("starting_asset")),
    source: clean(form.get("source")),
    suggested_service: clean(form.get("suggested_service")),
    suggested_scope: clean(form.get("suggested_scope")),
    uploaded_accounts: clean(form.get("uploaded_accounts"))
  };
  const max = {name:120,email:200,company:160,website:300,message:5000,research_goal:120,account_count:40,business_type:100,urgency:60,starting_asset:100,source:100,suggested_service:160,suggested_scope:800,uploaded_accounts:1200};
  for (const [k,v] of Object.entries({name,email,company,website,message,...fields})) if (v.length > max[k]) return new Response("Input too long", {status:400});
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return new Response("Invalid email", {status:400});
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) return new Response("Form delivery is not configured yet.", {status:503});
  const html = `<h2>New MRMProLeads Research Starter Request</h2>
    <p><b>Name:</b> ${esc(name)}</p><p><b>Work email:</b> ${esc(email)}</p><p><b>Company:</b> ${esc(company)}</p><p><b>Website:</b> ${esc(website)}</p>
    <hr><p><b>Business type:</b> ${esc(fields.business_type)}</p><p><b>Account count:</b> ${esc(fields.account_count)}</p><p><b>Urgency:</b> ${esc(fields.urgency)}</p><p><b>Starting asset:</b> ${esc(fields.starting_asset)}</p><p><b>Research goal:</b> ${esc(fields.research_goal)}</p>
    <p><b>Suggested service:</b> ${esc(fields.suggested_service)}</p><p><b>Suggested scope:</b> ${esc(fields.suggested_scope)}</p><p><b>Uploaded account preview:</b> ${esc(fields.uploaded_accounts)}</p>
    <p><b>Source:</b> ${esc(fields.source)}</p><p><b>Research request:</b></p><p>${esc(message).replace(/\n/g,"<br>")}</p>`;
  const res = await fetch("https://api.resend.com/emails", {method:"POST",headers:{"Authorization":`Bearer ${env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:env.CONTACT_FROM_EMAIL,to:[env.CONTACT_TO_EMAIL],reply_to:email,subject:"New MRMProLeads Research Starter Request",html})});
  if (!res.ok) return new Response("Unable to deliver request", {status:502});
  return Response.redirect(new URL("/success.html", request.url),303);
}
function clean(v){return String(v || "").trim()}
function esc(v){return clean(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
