export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const company = String(form.get("company") || "").trim();
  const website = String(form.get("website") || "").trim();
  const message = String(form.get("message") || "").trim();
  if (!name || !email || !message) return new Response("Missing required fields", {status:400});
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) return new Response("Form delivery is not configured yet.", {status:503});
  const html = `<h2>New MRMProLeads Paid Pilot Request</h2><p><b>Name:</b> ${esc(name)}</p><p><b>Work email:</b> ${esc(email)}</p><p><b>Company:</b> ${esc(company)}</p><p><b>Website:</b> ${esc(website)}</p><p><b>Research request:</b></p><p>${esc(message).replace(/\n/g,"<br>")}</p>`;
  const res = await fetch("https://api.resend.com/emails", {method:"POST",headers:{"Authorization":`Bearer ${env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:env.CONTACT_FROM_EMAIL,to:[env.CONTACT_TO_EMAIL],reply_to:email,subject:"New MRMProLeads Paid Pilot Request",html})});
  if (!res.ok) return new Response("Unable to deliver request", {status:502});
  return Response.redirect(new URL("/success.html", request.url),303);
}
function esc(v){return v.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
