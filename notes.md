# Notes on moving to tiered pricing

- Can we avoid supporting both pricing models?
  - Maybe! Announce change -> wait for grandfathering window -> prep code -> move all subscriptions -> deploy.
  - Forget it. Code to support both -> deploy -> announce change -> wait for grandfathering window -> move all subscriptions -> remove pay-per-repo code -> deploy.
- Move user to higher plan when they exceed max
- Check if we can move user to lower plan when deactivating repo
- Need to show plan on account page
- Don't fiddle with quantities


## Tiers (borrowed from FormKeep)

Up to 4 repos - $29/month
Up to 10 repos - $59/month
Up to 30 repos - $99/month
Up to 75 repos - $199/month
