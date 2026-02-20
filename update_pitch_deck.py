import json
import copy

def update_pitch_deck():
    file_path = '/Users/dean/Dev/block-trace/pitch-deck.pen'
    
    with open(file_path, 'r') as f:
        data = json.load(f)
    
    # Configuration
    slide_width = 1920
    slide_gap = 100
    slide_shift = slide_width + slide_gap # 2020
    
    # 1. Construct the new "The Platform" slide
    # We'll base it on Slide 06 (index 5) "Why Token Packs Matter" as it has a grid-like structure
    # But we want 4 cards.
    
    # Find index of insertion: 05 is index 4. We want to insert after it, so at index 5.
    insert_index = 5 
    
    # Deep copy a template slide to modify
    # Assuming Slide 06 (currently at index 5) is a good template
    template_slide = copy.deepcopy(data['children'][5]) 
    
    new_slide = template_slide
    new_slide['id'] = "new_platform_slide"
    new_slide['name'] = "06 - The Platform"
    
    # Calculate new X position: Previous Slide X + Shift
    prev_slide_x = data['children'][4]['x']
    new_slide['x'] = prev_slide_x + slide_shift
    
    # --- Update Header Content ---
    # Structure of header seems to be children[0]
    header = new_slide['children'][0]
    
    # Update Label "THE PLATFORM"
    header['children'][0]['content'] = "THE PLATFORM"
    
    # Update Title "Enterprise Asset Intelligence"
    header['children'][1]['content'] = "Enterprise Asset Intelligence"
    
    # Update Description
    header['children'][2]['content'] = "A modern SaaS dashboard built for data-heavy workflows. Explore asset graphs, track lifecycles, and monitor certifications in real time."
    
    # --- Update Content Grid ---
    # Structure of grid seems to be children[1] -> children (columns) -> children (cards)
    # The template (Slide 06) has 2 columns.
    # We have 4 items:
    # 1. Asset Graph Explorer
    # 2. Timeline View
    # 3. Component Dependency Map
    # 4. Certification Validity Alerts
    
    # Let's try to put 2 in first col, 2 in second col.
    
    # Update Column 1
    col1 = new_slide['children'][1]['children'][0]
    # It currently has 2 cards (b1, b2). Perfect.
    
    # Card 1: Asset Graph Explorer (Network icon)
    c1 = col1['children'][0]
    c1['name'] = "prod_card_1"
    c1['children'][0]['iconFontName'] = "network" # lucide-react 'Network'
    c1['children'][1]['content'] = "Asset Graph Explorer"
    c1['children'][2]['content'] = "Visualise complex relationships and dependencies across your entire asset portfolio."
    
    # Card 2: Timeline View (CalendarDays icon)
    c2 = col1['children'][1]
    c2['name'] = "prod_card_2"
    c2['children'][0]['iconFontName'] = "calendar-days" # lucide-react 'CalendarDays'
    c2['children'][1]['content'] = "Timeline View"
    c2['children'][2]['content'] = "Track full lifecycle events and mutable history in a linear, auditable timeline."

    # Update Column 2
    col2 = new_slide['children'][1]['children'][1]
    # It currently has 2 cards (b3, b4) (Wait, template had 3 in col1, 2 in col2? Let's check original)
    # Looking at view_file output lines 2213: "col6a" has "b1", "b2". 
    # Lines 2313: "col6b" has "b3", "b4".
    # So 2x2. Perfect.
    
    # Card 3: Component Dependency Map (GitMerge icon)
    c3 = col2['children'][0]
    c3['name'] = "prod_card_3"
    c3['children'][0]['iconFontName'] = "git-merge" # lucide-react 'GitMerge'
    c3['children'][1]['content'] = "Component Dependency Map"
    c3['children'][2]['content'] = "Trace sub-assemblies and verify BOMs down to the raw material level."
    
    # Card 4: Certification Validity Alerts (Bell icon)
    c4 = col2['children'][1]
    c4['name'] = "prod_card_4"
    c4['children'][0]['iconFontName'] = "bell" # lucide-react 'Bell'
    c4['children'][1]['content'] = "Certification Alerts"
    c4['children'][2]['content'] = "Proactive monitoring of certification expiry and compliance violations."
    
    # --- Update Slide Number Footer ---
    # footer is likely the last child
    footer = new_slide['children'][-1]
    footer['content'] = "06"
    
    # 2. Shift subsequent slides and update their numbering
    for i in range(insert_index, len(data['children'])):
        slide = data['children'][i]
        slide['x'] += slide_shift
        
        # Update Name "06 - ..." -> "07 - ..."
        # format is usually "DD - Name"
        name_parts = slide['name'].split(' - ')
        if len(name_parts) > 1 and name_parts[0].isdigit():
            old_num = int(name_parts[0])
            new_num = old_num + 1
            slide['name'] = f"{new_num:02d} - {name_parts[1]}"
            
        # Update Footer Number
        # Assuming footer is always the last child and is a text node with the number
        if slide['children'] and slide['children'][-1]['type'] == 'text':
            footer_node = slide['children'][-1]
            if footer_node['content'].isdigit():
                footer_num = int(footer_node['content'])
                footer_node['content'] = f"{footer_num + 1:02d}"
                
    # 3. Insert the new slide
    data['children'].insert(insert_index, new_slide)
    
    # 4. Save
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)
        
    print("Successfully updated pitch-deck.pen")

if __name__ == "__main__":
    update_pitch_deck()
