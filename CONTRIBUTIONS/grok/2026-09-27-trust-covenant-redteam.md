# Trust Covenant Red-Team

**Author:** Grok
**Date:** 2026-09-27
**Task:** T-002
**Documents reviewed:** docs/TRUST_COVENANT.md v1.0,
docs/OPERATING_AGREEMENT_CLAUSE.md v1.0

This is not a compliment sandwich. Claude wrote a good first draft of a
promise. The current text still has exits a future founder, a tired
founder, or a buyer could drive a Class A through.

---

## Summary

The covenant reads like a contract. Most of the teeth live in a
different file that is explicitly "not legal advice" and points at an
Exhibit A that does not exist.

A skeptical RVer has been trained by RVillage, Campendium, and every
"we'll always be independent" blog post. They will not be moved by tone.
They will look for:

- Who can change this.
- Who enforces it if the founder does not.
- Whether the money path matches the sermon.

Right now the answers are: the founder, almost nobody, and "later."

Do not publish this as "binding" until Exhibit A exists, the amendment
paths match, and someone other than Jason has standing to sue.

---

## Findings

### Finding 1: Co-op or benefit corp is the main escape hatch
**Severity:** Critical

**Problem:** Covenant §2 and OA X.1 let the company convert to "a
community-owned cooperative (or a member-owned benefit corporation,
depending on what our lawyers and the community decide is best)."

A benefit corporation is not a co-op. Delaware public-benefit language
still allows investor-owned equity, a founder-controlled board, and a
sale. "Member-owned" is undefined. "The community decide" has no vote
mechanism before members exist. The Board (which is Jason) decides with
"input" from an Advisory Council he has not seated.

This is how you keep the branding and drop the ownership.

**Suggested fix:** Pick one end state in the public covenant. If you
need a fallback entity, name the required attributes that must survive
either form: one-member-one-vote, no investor veto over conversion,
patronage or mission lock, founder's economic interest capped by a
published formula. Put those attributes in Article X, not the vibe.

### Finding 2: Exhibit A is missing. That is the actual contract.
**Severity:** Critical

**Problem:** OA X.2 says the Conversion Plan is Exhibit A: entity type,
governance, membership, treatment of equity and debt. Covenant §2 says
"It is public. It will be linked here once drafted."

You are asking people to trust a conversion whose terms are TBD.
Treatment of the founder's LLC interest is the whole fight. Without a
buyout / equity-swap formula, "the founder becomes an employee, not an
owner" is a slogan.

**Suggested fix:** Do not call the covenant binding in the footer until
Exhibit A is drafted, however ugly the first version is. A two-page
formula beats a polished page that points at a blank.

### Finding 3: Nobody has standing until Jason builds the jury
**Severity:** Critical

**Problem:** OA X.7 gives specific-performance standing to Members, or
if no Members exist, to "any member of the Advisory Council."

There is no Advisory Council. There are no Members. Standing is a null
set. X.3(a) also requires a two-thirds Council vote to amend Article X
before members exist. No Council means no amendment and no enforcement.
In practice the founder can ignore both, because the enforcers are an
empty chair.

Covenant §4 says the Council is "selected from active users." Selected
by whom? If Jason picks the five people who can veto him, that is not a
check. That is staffing.

**Suggested fix:**

- Name the first Council before launch, in public, with terms.
- Give standing to a named third party now: a co-op lawyer on retainer,
  a fiscal sponsor, or a designated community org. Ugly and real beats
  elegant and empty.
- Write the selection process. Founder-nominated + public objection
  window is the minimum. Founder-appointed-for-life is disqualifying.

### Finding 4: The two documents disagree on how to change "what will never change"
**Severity:** High

**Problem:** Covenant §3: before members exist, change requires "the
founder's written consent plus a 90-day public comment period."

OA X.3(a): founder written consent and two-thirds of the Advisory
Council.

Comment is not consent. A founder can collect angry emails for 90 days
and ship the change. If the live site cites the Covenant and the lawyer
cites the OA, the weaker document wins in the court of "we followed the
public one."

**Suggested fix:** One amendment path, copied verbatim into both files.
Pre-member: founder + 2/3 Council + 90-day notice. Post-member: 2/3
members. Delete the comment-only path.

### Finding 5: The 50,000-user trigger is defined by the company that wants to avoid it
**Severity:** High

**Problem:** Trigger (a) is "50,000 Registered Users who have each made
at least one Verified Contribution (as defined in the Company's
policies)."

Policies are not Article X. Policies can be rewritten to require a paid
stay receipt, a photo of a hookup, and a notary. Or the opposite: count
every help-form submit and waitlist email so the trigger fires on the
founder's schedule, under the founder's Conversion Plan.

Help request is listed as a qualifying contribution in Covenant §2.
That is easy to farm.

**Suggested fix:** Lock the definition of Verified Contribution in
Article X, not in a wiki. Minimum: a published review, a claimed
listing, or a completed help match — not a form submit. Changing the
definition should require the same supermajority as amending Article X.

### Finding 6: The $500k trigger is bookkeeping, not physics
**Severity:** High

**Problem:** "Cumulative gross revenue" of the Company. Easy moves:

- Run merch or lead fees through a sister LLC.
- Treat lead fees as the provider's money passing through.
- Stay a "community project" until 2030 and never book $500k.

The 2029 date is the only trigger that does not depend on Jason's
definitions. Treat the other two as bonuses, not protection.

**Suggested fix:** Define revenue as consolidated gross receipts of the
Company and any affiliate under common control. Name the affiliates.
Require the quarterly update to publish a running total against the
$500k line.

### Finding 7: 90 days to convert an LLC is a built-in breach
**Severity:** High

**Problem:** X.7: fail to convert within 90 days of a trigger and
someone can sue for specific performance. Real LLC → co-op conversions
involve securities questions, tax, new articles, membership agreements,
and (if you took money) investor consents. 90 days is how you put the
company in default the day the trigger hits.

A skeptical lawyer will say the clause is either unenforceable as
drafted or a gift to whoever wants to freeze the company.

**Suggested fix:** 90 days to file conversion documents and publish a
dated plan. 12 months to complete. Specific performance attaches to the
filing duty, not to a fairy-tale close.

### Finding 8: Acquisition language is a current-Jason promise
**Severity:** High

**Problem:** Covenant §3: "If TrailerVegas is ever acquired, the
acquirer must agree to these terms in writing, or the deal does not
happen."

That binds Jason today. It does not bind a future board that first
amends Article X, or sells assets out from under the LLC, or licenses
the brand to a buyer and keeps an empty shell.

X.6 tries to make the obligation run with the company. Good instinct.
Still dies if there is no Council and no standing.

**Suggested fix:** Ban asset sales, exclusive brand licenses, and
"acqui-hires" that move the community data without assuming Article X.
Publish that in Exhibit A. Repeat: standing must exist before the first
interesting offer arrives.

### Finding 9: Investor acknowledgment will be laughed out of the first serious term sheet
**Severity:** Medium (strategic, not moral)

**Problem:** X.4 converts investor equity to non-voting or a formula
buyout on conversion. Most funds cannot sign that. The internal note
says "good, those aren't our investors." Fine.

The public risk is different: if the only capital that will fund a
50-state directory refuses the clause, the 2029 trigger arrives with a
tired founder and a thin LLC. That is when people sell. The covenant
does not say what happens if conversion is legally possible and
economically empty.

**Suggested fix:** Say it out loud in the covenant. "We may stay small.
We may not take VC. If we cannot fund the co-op, we still convert the
governance even if the bank account is ugly." Then mean it. Or drop the
co-op date and use a golden-share / dissolution-to-community structure
a lawyer can actually file.

### Finding 10: Surplus-by-usage can pay the parks, not the reviewers
**Severity:** Medium

**Problem:** "Surplus is distributed by usage." In co-op law that is
patronage. The heavy users of a lead marketplace are paying providers
and booking parks. Reviewers who create the trust layer may use the
site daily and generate $0 of patronage if patronage tracks revenue.

You can build a platform the community writes and the businesses cash.

**Suggested fix:** Split patronage: a reviewer pool and a payer pool,
percentages locked in Exhibit A. Or drop surplus talk until there is
surplus. Promising patronage math you have not designed is more surface
area for "they lied."

### Finding 11: Business members vote on the rules that govern their rankings
**Severity:** Medium

**Problem:** "Every registered user in good standing becomes a member.
One member, one vote." A park owner, a mobile tech, and a full-timer
each get one vote on ranking and ad policy.

That is philosophically pretty. It is also how review sites get
captured. You roasted pay-to-play rankings and then handed the ranked
parties a vote.

**Suggested fix:** Either (a) consumer-member votes on ranking/ad/data
policy, business members vote on provider tools, or (b) keep
one-member-one-vote but bar businesses from the ranking-algorithm veto.
Put the split in Exhibit A before you recruit the first featured park.

### Finding 12: "We never sell your data" vs the help form
**Severity:** Medium

**Problem:** Covenant §3: personal data is never shared unless the user
"explicitly asked." The help form shares name, phone, location, rig,
and problem with 1–2 providers. That is the product.

Consent can make this clean. The current covenant does not mention lead
routing at all. A user who reads the covenant and not the form checkbox
will call it a bait-and-switch — the exact charge you level at The Dyrt.

**Suggested fix:** Add one paragraph: "If you submit a help request, we
send the details you typed to the providers you are matched with. That
is the job. You can refuse. We do not resell the list." Repeat the same
sentence in the form, the confirmation email, and the provider email.

### Finding 13: Public moderation log vs park-owner retaliation
**Severity:** Medium

**Problem:** Covenant §4 promises a public log of every removed review
and banned account, with a reason.

Good against shadow-banning. Bad when a park owner in a small town
reads "removed: Jane D., review of X Park, personal safety." You
already know parks retaliate. A public punishment log can become a
directory of people to ban from the property.

**Suggested fix:** Publish reason codes and counts, not identities,
until a process exists. Real names in the log should be opt-in or
court-ordered.

### Finding 14: "Rough financials" is how transparency dies
**Severity:** Low

**Problem:** Quarterly "rough financials." Rough means whatever still
looks fine.

**Suggested fix:** Commit to three numbers every quarter: running gross
receipts vs the $500k trigger, user count vs the 50k trigger, and
whether any affiliate received platform-related revenue. Skip the rest
until there is a bookkeeper.

### Finding 15: "Binding commitment. It is not marketing."
**Severity:** High (credibility)

**Problem:** A page on a GitHub repo and a future website footer is
marketing until it is in a filed operating agreement, in a chosen
state, with an Exhibit A, with humans who have standing.

Saying "binding" before those exist is the sentence a blogger will
quote when this gets messy.

**Suggested fix:** Change the footer line to: "This is the promise. The
filed operating agreement is here. Exhibit A is here." Or take the word
"binding" off the page until T-006 is done.

---

## What a skeptical RVer will hate, in their voice

- "Community-owned in 2029" is three travel seasons plus a pandemic plus
  a sale cycle from now.
- The conversion plan is 'coming soon.'
- The watchdog council is empty and founder-picked.
- You roast lead farms and then sell qualified leads.
- You roast data sales and then pass my phone to a stranger with a
  wrench.
- You want one-member-one-vote for the park that buried my last review.
- The name still sounds like a Vegas funnel.

None of that is fatal. All of it is the first comments on Reddit if you
ship the current PDF energy without the missing pieces.

---

## The One Thing I'd Fix First

Seat a real Advisory Council and publish a one-page Exhibit A before
the covenant goes in the footer.

Everything else is decoration until those two exist. Without them,
Article X has no enforcer and no destination. With them, the weasel
list above becomes a lawyer markup instead of a branding problem.

Do not wait for 1,000 users. Three named RVers with a published veto
and a published conversion sketch is more trust than another manifesto
paragraph.

---

## Open Questions for Other AIs

- **Claude:** Reconcile Covenant §3 amendment language with OA X.3.
  They conflict. Pick the stricter one and copy it.
- **Claude:** Who selects the first Advisory Council? Write the process
  or the covenant is LARPing.
- **Gemini:** Any precedent for an LLC that publicly promised a co-op
  conversion on a date certain and actually did it? Names, dates,
  corpses.
- **ChatGPT:** Rewrite Covenant §6 so lead fees do not sound like the
  thing we just attacked. Same facts. Less hypocrisy.
- **Emergent:** When you build the footer, do not hardcode "binding
  commitment" until T-006 closes. Use "public promise — legal review
  pending" or link a live OA.
- **Founder:** 🚩 DECISION NEEDED — entity state, first three Council
  names, Exhibit A draft date, and whether benefit-corp remains a
  listed off-ramp.

---

## Recommended covenant edits (not applied)

I did not rewrite docs/TRUST_COVENANT.md. That is Claude's file after
you decide.

Minimum viable honesty patch, if you want a punch list:

1. Delete "or a member-owned benefit corporation" from the public page,
   or define the non-negotiable attributes.
2. Replace "will be linked here once drafted" with a dated Exhibit A
   stub.
3. Replace comment-only amendment with founder + Council supermajority.
4. Add the help-form data paragraph.
5. Take "binding" off the page until the OA is filed.
6. Define Verified Contribution in Article X.
7. Define standing that exists on day one.

Signed,
Grok
2026-09-27
