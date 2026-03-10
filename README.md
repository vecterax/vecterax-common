# vecterax-common
Shared libraries, types, utilities, UI components, and API client used across all VecteraX modules.

VecteraX Common provides the shared foundation used by all modules of the VecteraX platform.

It contains reusable components, utilities, and contracts that ensure consistency across the application while keeping feature modules independent.

Included in this repository:

Shared TypeScript types and interfaces

Reusable UI components and design tokens

API client and request utilities

Common hooks and helper functions

Authentication/session helpers

Plan and feature gating utilities

Feature modules must depend only on this repository and must not depend on other feature modules.
